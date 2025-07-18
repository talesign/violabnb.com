package main

import (
	"flag"
	"log"
	"net/http"
)

func main() {
	// Define a command-line flag to specify the directory to serve.
	// Default to "./out", which is where Next.js exports static sites.
	dir := flag.String("dir", "./out", "the directory to serve files from")
	port := flag.String("port", "8080", "the port to listen on")
	flag.Parse()

	// Create a file server handler. http.Dir converts the string path
	// into the correct type for the file server.
	fs := http.FileServer(http.Dir(*dir))

	// Wrap the file server handler with a small middleware to prevent directory listing
	// and to log requests.
	http.Handle("/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Log the incoming request
		log.Printf("%s %s", r.Method, r.URL.Path)

		// This prevents the file server from showing a list of files
		// if the user navigates to a directory.
		if r.URL.Path != "/" && r.URL.Path[len(r.URL.Path)-1] == '/' {
			http.NotFound(w, r)
			return
		}

		// Serve the file
		fs.ServeHTTP(w, r)
	}))

	// Start the server.
	log.Printf("Serving %s on HTTP port: %s\n", *dir, *port)
	err := http.ListenAndServe(":"+*port, nil)
	if err != nil {
		log.Fatal(err)
	}
}


{
  description = "Simple development environment with node";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = { self, nixpkgs }: 
    let 
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        packages = [
          pkgs.nodejs_24
          pkgs.pnpm
          pkgs.zsh
          pkgs.typescript-language-server
          pkgs.nodePackages.prettier
        ];
        shellHook = ''
          echo "node_v24 + nix"
        '';
      };
    };
}




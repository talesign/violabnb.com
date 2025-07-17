import fs from "fs";

import { CmsCollection } from "@/lib/types";

export default function FeedGenerator(
  list: CmsCollection[],
  feed_title: string,
  feed_file_name: string,
  feed_path: string,
  feed_description: string,
  feed_pub_date: Date
) {
  const feed = `<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0"
	xmlns:atom="http://www.w3.org/2005/Atom"
	xmlns:media="http://search.yahoo.com/mrss/">
	<channel>
		<title>${feed_title}</title>
		<link>https://${process.env.NEXT_PUBLIC_HOST}</link>
		<description>${feed_description}</description>
		<pubDate>${feed_pub_date.toUTCString()}</pubDate>
		<ttl>60</ttl>
		<generator>Talesign RSS</generator>
		<atom:link href="https://${
      process.env.NEXT_PUBLIC_HOST
    }/${feed_file_name}.xml" rel="self" type="application/rss+xml"/>
		
        ${list
          .map(
            (item: CmsCollection) =>
              `<item>
            <title>${item.seo_title}</title>
			<link>https://${process.env.NEXT_PUBLIC_HOST}/${feed_path}/${item.slug}</link>
			<guid>https://${process.env.NEXT_PUBLIC_HOST}/${feed_path}/${item.slug}</guid>
			<description>${item.seo_description}</description>
			<pubDate>${new Date(item.updated).toUTCString()}</pubDate>
			<media:content url="https://${
        process.env.NEXT_PUBLIC_PB_HOST
      }/api/files/${feed_file_name}/${item.id}/${
                item.featured_image
              }" medium="image"/>
			<media:thumbnail url="https://${
        process.env.NEXT_PUBLIC_PB_HOST
      }/api/files/${feed_file_name}/${item.id}/${item.featured_image}"/>
            </item>`
          )
          .join("")}
    </channel>
</rss>
`;
  fs.writeFileSync(`./public/rss/${feed_path}_feed.xml`, feed);
}

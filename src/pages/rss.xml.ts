import rss from "@astrojs/rss";
import { siteConfig } from "@/data/site";
import { sitePath } from "@/utils/paths";
import { getPublishedPosts } from "@/utils/posts";

export async function GET(context: { site: URL }) {
  const posts = await getPublishedPosts();

  return rss({
    title: siteConfig.name,
    description: siteConfig.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: sitePath(`/blog/${post.slug}`)
    }))
  });
}

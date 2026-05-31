import { getCollection, type CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

export function isPrivatePost(post: BlogPost) {
  return post.data.visibility === "private" || post.data.draft;
}

export function getPostVisibility(post: BlogPost) {
  return isPrivatePost(post) ? "private" : "public";
}

function sortByNewest(posts: BlogPost[]) {
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPublishedPosts() {
  const posts = await getCollection("blog", (post) => !isPrivatePost(post));
  return sortByNewest(posts);
}

export async function getPrivatePosts() {
  if (!import.meta.env.DEV) {
    return [];
  }

  const posts = await getCollection("blog", (post) => isPrivatePost(post));
  return sortByNewest(posts);
}

export async function getLocalVisiblePosts() {
  const publicPosts = await getPublishedPosts();
  if (!import.meta.env.DEV) {
    return publicPosts;
  }

  const privatePosts = await getPrivatePosts();
  return sortByNewest([...publicPosts, ...privatePosts]);
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}

export function getAllTags(posts: BlogPost[]) {
  const tagCounts = new Map<string, number>();

  for (const post of posts) {
    for (const tag of post.data.tags) {
      tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
    }
  }

  return [...tagCounts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
}

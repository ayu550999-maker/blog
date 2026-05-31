import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? "ayu550999-maker";
const isUserOrOrgPage = repoName === `${owner}.github.io`;

const site = process.env.SITE || `https://${owner}.github.io`;
const base = process.env.BASE_PATH || (repoName && !isUserOrOrgPage ? `/${repoName}` : "/");

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: "github-light"
    }
  }
});

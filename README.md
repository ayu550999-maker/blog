# 我的博客

陈杰煜的个人静态博客，基于 Astro、Markdown 和 GitHub Pages。

## 本地开发

```bash
npm install
npm run dev
```

打开终端提示的本地地址即可预览。

## 写文章

在 `src/content/blog` 新增 Markdown 文件：

```md
---
title: "文章标题"
description: "一句话摘要"
pubDate: "2026-05-31"
updatedDate: "2026-06-01"
tags: ["技术", "随笔"]
visibility: "public"
draft: false
---

正文内容。
```

`visibility: "public"` 的文章会发布到线上。

## 私密文章

私密文章只在本地可见，不会发布到 GitHub Pages。

在 `src/content/blog/private/` 目录里新建 Markdown 文件：

```md
---
title: "私密笔记"
description: "这篇文章只在本地预览。"
pubDate: "2026-05-31"
tags: ["私密", "草稿"]
visibility: "private"
---

这里写只有自己看的内容。
```

本地运行后打开：

```bash
npm run dev
```

然后访问 `/drafts` 查看私密文章。

注意：`src/content/blog/private/` 已加入 `.gitignore`，不要把私密文章提交到公开仓库。

旧写法 `draft: true` 也会被当作私密文章处理。

## 个性化

- 站点名称、作者、简介：修改 `src/data/site.ts`
- 关于页面：修改 `src/pages/about.astro`
- 全局样式：修改 `src/styles/global.css`
- 全站背景图：替换 `public/images/site-background.webp`

当前背景图来源：[Pexels - Forests and Mist](https://www.pexels.com/photo/forests-and-mist-12366058/)，按 [Pexels License](https://www.pexels.com/license/) 可免费使用和修改。

## 部署到 GitHub Pages

1. 在 GitHub 账号 `ayu550999-maker` 下新建公开仓库。
2. 把本项目提交并推送到仓库的 `main` 分支。
3. 在仓库的 `Settings -> Pages` 中，将 `Source` 设置为 `GitHub Actions`。
4. 推送后 `.github/workflows/deploy.yml` 会自动构建并发布。

默认配置会在 GitHub Actions 里根据仓库名推导 GitHub Pages 的访问路径。

如果你使用自定义域名，可以在仓库变量或 workflow 环境里设置：

```bash
SITE=https://example.com
BASE_PATH=/
```

## 常用命令

```bash
npm run dev      # 本地开发
npm run build    # 构建静态站点
npm run preview  # 预览构建结果
npm run check    # 类型和 Astro 检查
```

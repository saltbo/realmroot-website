import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog'))
    .filter((post) => post.data.language === 'zh-CN')
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());

  return rss({
    title: 'Realmroot 博客',
    description: '面向用户、应用与 Agent 的身份与委托授权基础设施。',
    site: context.site ?? 'https://realmroot.dev',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/zh-cn/blog/${post.id.replace(/^zh-cn\//, '')}/`,
    })),
  });
}

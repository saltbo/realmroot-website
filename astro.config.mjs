// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://realmroot.dev',
  integrations: [
    sitemap(),
    starlight({
      title: 'Realmroot',
      description: 'Identity and delegated access for people, apps, and agents.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/realmroot/realmroot',
        },
      ],
      locales: {
        root: { label: 'English', lang: 'en' },
        'zh-cn': { label: '简体中文', lang: 'zh-CN' },
      },
      defaultLocale: 'root',
      customCss: ['./src/styles/starlight.css'],
      sidebar: [
        {
          label: 'Get started',
          translations: { 'zh-CN': '开始使用' },
          items: [
            {
              label: 'What is Realmroot?',
              translations: { 'zh-CN': 'Realmroot 是什么？' },
              slug: 'docs',
            },
            {
              label: 'Quick start',
              translations: { 'zh-CN': '快速开始' },
              slug: 'docs/getting-started/quick-start',
            },
          ],
        },
        {
          label: 'Concepts',
          translations: { 'zh-CN': '核心概念' },
          items: [
            {
              label: 'The realm boundary',
              translations: { 'zh-CN': 'Realm 边界' },
              slug: 'docs/concepts/realm-boundary',
            },
            {
              label: 'Agent authority',
              translations: { 'zh-CN': 'Agent 权限模型' },
              slug: 'docs/concepts/agent-authority',
            },
          ],
        },
      ],
    }),
  ],
});

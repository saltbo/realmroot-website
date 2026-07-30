export const site = {
  name: 'Realmroot',
  github: 'https://github.com/saltbo/realmroot',
  description: 'Identity and delegated access for people, apps, and agents.',
};

export type Locale = 'en' | 'zh-CN';

export const copy = {
  en: {
    lang: 'en',
    home: '/',
    nav: {
      product: 'Product',
      architecture: 'Architecture',
      agents: 'Agents',
      blog: 'Blog',
      docs: 'Docs',
      github: 'View on GitHub',
    },
    footer: {
      statement: 'Your product’s identity root.',
      product: 'Product',
      resources: 'Resources',
      legal: 'Open source under AGPL-3.0.',
    },
  },
  'zh-CN': {
    lang: 'zh-CN',
    home: '/zh-cn/',
    nav: {
      product: '产品',
      architecture: '架构',
      agents: 'Agent',
      blog: '博客',
      docs: '文档',
      github: '在 GitHub 查看',
    },
    footer: {
      statement: '每个产品自己的身份与委托授权根。',
      product: '产品',
      resources: '资源',
      legal: '基于 AGPL-3.0 开源。',
    },
  },
} satisfies Record<Locale, unknown>;


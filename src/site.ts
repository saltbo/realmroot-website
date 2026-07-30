export const site = {
  name: 'Realmroot',
  github: 'https://github.com/realmroot/realmroot',
  wallet: 'https://wallet.realmroot.dev',
  description: 'Identity, delegated authority, and policy-controlled payments for AI agents.',
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
      wallet: 'Wallet',
      github: 'View on GitHub',
    },
    footer: {
      statement: 'Give every Agent a real identity.',
      product: 'Products',
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
      wallet: '钱包',
      github: '在 GitHub 查看',
    },
    footer: {
      statement: '给每个 Agent 一个真正的身份。',
      product: '产品',
      resources: '资源',
      legal: '基于 AGPL-3.0 开源。',
    },
  },
} satisfies Record<Locale, unknown>;

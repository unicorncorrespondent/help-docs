import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const githubOwner = process.env.GITHUB_REPOSITORY_OWNER || 'baidu';
const githubRepo = (process.env.GITHUB_REPOSITORY || 'baidu/paddlehelix-docs').split('/')[1];
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const isUserOrOrgSite = githubRepo.toLowerCase() === `${githubOwner.toLowerCase()}.github.io`;

const config: Config = {
  title: 'PaddleHelix 帮助文档',
  tagline: 'AI-powered bioinformatics platform for life sciences and drug discovery',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set production URL and base path.
  // In GitHub Actions, publish under https://<owner>.github.io/<repo>/.
  url: isGithubActions ? `https://${githubOwner}.github.io` : 'https://paddlehelix.com',
  baseUrl: isGithubActions ? (isUserOrOrgSite ? '/' : `/${githubRepo}/`) : '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: githubOwner,
  projectName: githubRepo,

  onBrokenLinks: 'warn',

  markdown: {
    format: 'md',
    mermaid: true,
    hooks: {
      onBrokenMarkdownImages: (relativeImagePath) => {
        // Ignore broken markdown images
        return;
      },
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'PaddleHelix 帮助文档',
      logo: {
        alt: 'PaddleHelix Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: '文档',
        },
        {
          href: 'https://paddlehelix.com',
          label: '官网',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '快速开始',
              to: '/docs/B-00-QuickStart',
            },
          ],
        },
        {
          title: '链接',
          items: [
            {
              label: 'PaddleHelix 官网',
              href: 'https://paddlehelix.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PaddleHelix. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

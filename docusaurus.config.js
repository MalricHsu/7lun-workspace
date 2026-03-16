// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "7lun 的程式手冊", // 更新主標題
  tagline: "將設計稿轉化為直覺介面，記錄前端開發的生存軌跡。", // 更新副標題
  favicon: "img/logo.png",
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;500;700&display=swap",
  ],
  clientModules: [require.resolve("./src/clientModules/scrollHandler.js")],

  future: {
    v4: true,
  },

  // GitHub Pages 設定
  url: "https://MalricHsu.github.io",
  baseUrl: "/7lun-workspace/", // 建議結尾加上斜線

  organizationName: "MalricHsu",
  projectName: "7lun-workspace",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "ignore",

  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/MalricHsu/7lun-workspace/tree/main/",
        },
        blog: {
          showReadingTime: true,
          onInlineTags: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/logo.png",
      colorMode: {
        disableSwitch: true,
        defaultMode: "light",
      },
      navbar: {
        title: "7lun 的程式手冊",
        hideOnScroll: false,
        items: [
          { to: "/about", label: "關於作者", position: "right" }, // 統一 4 字
          { to: "/portfolio", label: "專案作品", position: "right" },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "right",
            label: "語法手冊",
          },
          { to: "/blog", label: "生存日誌", position: "right" },
          {
            href: "https://github.com/MalricHsu",
            position: "right",
            className: "header-github-link",
            label: "GitHub",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            items: [
              { label: "關於作者", to: "/about" },
              { label: "專案作品", to: "/portfolio" },
              { label: "語法手冊", to: "/docs/intro" },
              { label: "生存日誌", to: "/blog" },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 7lun 的程式手冊.`,
      },
    }),
};

export default config;

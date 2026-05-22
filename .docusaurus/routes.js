import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/7lun-workspace/__docusaurus/debug',
    component: ComponentCreator('/7lun-workspace/__docusaurus/debug', 'daa'),
    exact: true
  },
  {
    path: '/7lun-workspace/__docusaurus/debug/config',
    component: ComponentCreator('/7lun-workspace/__docusaurus/debug/config', '3b6'),
    exact: true
  },
  {
    path: '/7lun-workspace/__docusaurus/debug/content',
    component: ComponentCreator('/7lun-workspace/__docusaurus/debug/content', 'd3e'),
    exact: true
  },
  {
    path: '/7lun-workspace/__docusaurus/debug/globalData',
    component: ComponentCreator('/7lun-workspace/__docusaurus/debug/globalData', '478'),
    exact: true
  },
  {
    path: '/7lun-workspace/__docusaurus/debug/metadata',
    component: ComponentCreator('/7lun-workspace/__docusaurus/debug/metadata', '112'),
    exact: true
  },
  {
    path: '/7lun-workspace/__docusaurus/debug/registry',
    component: ComponentCreator('/7lun-workspace/__docusaurus/debug/registry', 'e94'),
    exact: true
  },
  {
    path: '/7lun-workspace/__docusaurus/debug/routes',
    component: ComponentCreator('/7lun-workspace/__docusaurus/debug/routes', '789'),
    exact: true
  },
  {
    path: '/7lun-workspace/about',
    component: ComponentCreator('/7lun-workspace/about', '1d1'),
    exact: true
  },
  {
    path: '/7lun-workspace/blog',
    component: ComponentCreator('/7lun-workspace/blog', '8ca'),
    exact: true
  },
  {
    path: '/7lun-workspace/blog/archive',
    component: ComponentCreator('/7lun-workspace/blog/archive', 'b21'),
    exact: true
  },
  {
    path: '/7lun-workspace/blog/authors',
    component: ComponentCreator('/7lun-workspace/blog/authors', '1ca'),
    exact: true
  },
  {
    path: '/7lun-workspace/blog/tags',
    component: ComponentCreator('/7lun-workspace/blog/tags', 'ee1'),
    exact: true
  },
  {
    path: '/7lun-workspace/blog/tags/layout',
    component: ComponentCreator('/7lun-workspace/blog/tags/layout', 'b15'),
    exact: true
  },
  {
    path: '/7lun-workspace/blog/tags/project',
    component: ComponentCreator('/7lun-workspace/blog/tags/project', '4c9'),
    exact: true
  },
  {
    path: '/7lun-workspace/blog/tags/react',
    component: ComponentCreator('/7lun-workspace/blog/tags/react', '4a8'),
    exact: true
  },
  {
    path: '/7lun-workspace/blog/withyourlife-project',
    component: ComponentCreator('/7lun-workspace/blog/withyourlife-project', '701'),
    exact: true
  },
  {
    path: '/7lun-workspace/blog/yestep-project',
    component: ComponentCreator('/7lun-workspace/blog/yestep-project', '0a7'),
    exact: true
  },
  {
    path: '/7lun-workspace/portfolio',
    component: ComponentCreator('/7lun-workspace/portfolio', '7ab'),
    exact: true
  },
  {
    path: '/7lun-workspace/docs',
    component: ComponentCreator('/7lun-workspace/docs', 'b58'),
    routes: [
      {
        path: '/7lun-workspace/docs',
        component: ComponentCreator('/7lun-workspace/docs', '63a'),
        routes: [
          {
            path: '/7lun-workspace/docs/tags',
            component: ComponentCreator('/7lun-workspace/docs/tags', 'c08'),
            exact: true
          },
          {
            path: '/7lun-workspace/docs/tags/css',
            component: ComponentCreator('/7lun-workspace/docs/tags/css', 'fa4'),
            exact: true
          },
          {
            path: '/7lun-workspace/docs/tags/html',
            component: ComponentCreator('/7lun-workspace/docs/tags/html', '78a'),
            exact: true
          },
          {
            path: '/7lun-workspace/docs/tags/vue',
            component: ComponentCreator('/7lun-workspace/docs/tags/vue', 'f47'),
            exact: true
          },
          {
            path: '/7lun-workspace/docs/tags/知識點筆記',
            component: ComponentCreator('/7lun-workspace/docs/tags/知識點筆記', 'bd5'),
            exact: true
          },
          {
            path: '/7lun-workspace/docs/tags/課程筆記',
            component: ComponentCreator('/7lun-workspace/docs/tags/課程筆記', 'a7b'),
            exact: true
          },
          {
            path: '/7lun-workspace/docs',
            component: ComponentCreator('/7lun-workspace/docs', 'c15'),
            routes: [
              {
                path: '/7lun-workspace/docs/category/git',
                component: ComponentCreator('/7lun-workspace/docs/category/git', '66a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/category/html--css',
                component: ComponentCreator('/7lun-workspace/docs/category/html--css', '330'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/category/javascript',
                component: ComponentCreator('/7lun-workspace/docs/category/javascript', '3a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/category/nodejs',
                component: ComponentCreator('/7lun-workspace/docs/category/nodejs', '2d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/category/react',
                component: ComponentCreator('/7lun-workspace/docs/category/react', 'd60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/category/vuejs',
                component: ComponentCreator('/7lun-workspace/docs/category/vuejs', '9c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/git/getting-started',
                component: ComponentCreator('/7lun-workspace/docs/git/getting-started', '734'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/html-css/2025 切版直播 - Tailwind 加碼講義',
                component: ComponentCreator('/7lun-workspace/docs/html-css/2025 切版直播 - Tailwind 加碼講義', '5cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/html-css/Background 使用方法',
                component: ComponentCreator('/7lun-workspace/docs/html-css/Background 使用方法', 'f0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/html-css/Bootstrap 5 文件介紹',
                component: ComponentCreator('/7lun-workspace/docs/html-css/Bootstrap 5 文件介紹', 'd66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/html-css/Font 字體介紹',
                component: ComponentCreator('/7lun-workspace/docs/html-css/Font 字體介紹', 'cf3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/html-css/HTML基本介紹',
                component: ComponentCreator('/7lun-workspace/docs/html-css/HTML基本介紹', 'f29'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/html-css/Position 定位',
                component: ComponentCreator('/7lun-workspace/docs/html-css/Position 定位', '3d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/html-css/RWD響應式設計-斷點相關資訊',
                component: ComponentCreator('/7lun-workspace/docs/html-css/RWD響應式設計-斷點相關資訊', 'ab9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/html-css/Sass 介紹',
                component: ComponentCreator('/7lun-workspace/docs/html-css/Sass 介紹', '12b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/html-css/格線系統',
                component: ComponentCreator('/7lun-workspace/docs/html-css/格線系統', 'a08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/html-css/第一堂 1 px 也不差的版型控制術',
                component: ComponentCreator('/7lun-workspace/docs/html-css/第一堂 1 px 也不差的版型控制術', '69e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/html-css/第七堂 網頁動態',
                component: ComponentCreator('/7lun-workspace/docs/html-css/第七堂 網頁動態', '22f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/html-css/第三堂 RWD 響應式網頁',
                component: ComponentCreator('/7lun-workspace/docs/html-css/第三堂 RWD 響應式網頁', '9aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/html-css/第二堂 Flex 網頁排版術',
                component: ComponentCreator('/7lun-workspace/docs/html-css/第二堂 Flex 網頁排版術', '9a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/html-css/第五堂 表單設計',
                component: ComponentCreator('/7lun-workspace/docs/html-css/第五堂 表單設計', '4e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/html-css/第八堂 實戰總複習',
                component: ComponentCreator('/7lun-workspace/docs/html-css/第八堂 實戰總複習', 'ab3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/html-css/第六堂 導入網頁規範設計流程',
                component: ComponentCreator('/7lun-workspace/docs/html-css/第六堂 導入網頁規範設計流程', '73a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/html-css/第四堂 多頁式網頁',
                component: ComponentCreator('/7lun-workspace/docs/html-css/第四堂 多頁式網頁', '5fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/html-css/網站LOGO 圖片取代文字方法',
                component: ComponentCreator('/7lun-workspace/docs/html-css/網站LOGO 圖片取代文字方法', '416'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/html-css/複合選擇器 介紹',
                component: ComponentCreator('/7lun-workspace/docs/html-css/複合選擇器 介紹', 'fd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/html-css/響應式導覽列轉換（直立 ⇄ 橫向滑動）',
                component: ComponentCreator('/7lun-workspace/docs/html-css/響應式導覽列轉換（直立 ⇄ 橫向滑動）', '40e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/intro',
                component: ComponentCreator('/7lun-workspace/docs/intro', 'd0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/javascript/getting-started',
                component: ComponentCreator('/7lun-workspace/docs/javascript/getting-started', '5a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/nodejs/getting-started',
                component: ComponentCreator('/7lun-workspace/docs/nodejs/getting-started', 'f82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/react/getting-started',
                component: ComponentCreator('/7lun-workspace/docs/react/getting-started', 'ccc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/vue/getting-started',
                component: ComponentCreator('/7lun-workspace/docs/vue/getting-started', 'f91'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/7lun-workspace/',
    component: ComponentCreator('/7lun-workspace/', 'b32'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

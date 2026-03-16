import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/7lun-log/__docusaurus/debug',
    component: ComponentCreator('/7lun-log/__docusaurus/debug', '094'),
    exact: true
  },
  {
    path: '/7lun-log/__docusaurus/debug/config',
    component: ComponentCreator('/7lun-log/__docusaurus/debug/config', '8d1'),
    exact: true
  },
  {
    path: '/7lun-log/__docusaurus/debug/content',
    component: ComponentCreator('/7lun-log/__docusaurus/debug/content', '287'),
    exact: true
  },
  {
    path: '/7lun-log/__docusaurus/debug/globalData',
    component: ComponentCreator('/7lun-log/__docusaurus/debug/globalData', '3e9'),
    exact: true
  },
  {
    path: '/7lun-log/__docusaurus/debug/metadata',
    component: ComponentCreator('/7lun-log/__docusaurus/debug/metadata', 'b4e'),
    exact: true
  },
  {
    path: '/7lun-log/__docusaurus/debug/registry',
    component: ComponentCreator('/7lun-log/__docusaurus/debug/registry', 'c3e'),
    exact: true
  },
  {
    path: '/7lun-log/__docusaurus/debug/routes',
    component: ComponentCreator('/7lun-log/__docusaurus/debug/routes', '5b9'),
    exact: true
  },
  {
    path: '/7lun-log/about',
    component: ComponentCreator('/7lun-log/about', 'aa6'),
    exact: true
  },
  {
    path: '/7lun-log/blog',
    component: ComponentCreator('/7lun-log/blog', '88b'),
    exact: true
  },
  {
    path: '/7lun-log/blog/archive',
    component: ComponentCreator('/7lun-log/blog/archive', '4e5'),
    exact: true
  },
  {
    path: '/7lun-log/blog/authors',
    component: ComponentCreator('/7lun-log/blog/authors', 'eec'),
    exact: true
  },
  {
    path: '/7lun-log/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/7lun-log/blog/authors/all-sebastien-lorber-articles', '8b1'),
    exact: true
  },
  {
    path: '/7lun-log/blog/authors/yangshun',
    component: ComponentCreator('/7lun-log/blog/authors/yangshun', 'df3'),
    exact: true
  },
  {
    path: '/7lun-log/blog/first-blog-post',
    component: ComponentCreator('/7lun-log/blog/first-blog-post', '3a2'),
    exact: true
  },
  {
    path: '/7lun-log/blog/long-blog-post',
    component: ComponentCreator('/7lun-log/blog/long-blog-post', 'abb'),
    exact: true
  },
  {
    path: '/7lun-log/blog/mdx-blog-post',
    component: ComponentCreator('/7lun-log/blog/mdx-blog-post', '034'),
    exact: true
  },
  {
    path: '/7lun-log/blog/tags',
    component: ComponentCreator('/7lun-log/blog/tags', '26c'),
    exact: true
  },
  {
    path: '/7lun-log/blog/tags/docusaurus',
    component: ComponentCreator('/7lun-log/blog/tags/docusaurus', 'a97'),
    exact: true
  },
  {
    path: '/7lun-log/blog/tags/facebook',
    component: ComponentCreator('/7lun-log/blog/tags/facebook', '7f3'),
    exact: true
  },
  {
    path: '/7lun-log/blog/tags/hello',
    component: ComponentCreator('/7lun-log/blog/tags/hello', '7e8'),
    exact: true
  },
  {
    path: '/7lun-log/blog/tags/hola',
    component: ComponentCreator('/7lun-log/blog/tags/hola', 'a80'),
    exact: true
  },
  {
    path: '/7lun-log/blog/welcome',
    component: ComponentCreator('/7lun-log/blog/welcome', '87a'),
    exact: true
  },
  {
    path: '/7lun-log/portfolio',
    component: ComponentCreator('/7lun-log/portfolio', 'b53'),
    exact: true
  },
  {
    path: '/7lun-log/docs',
    component: ComponentCreator('/7lun-log/docs', '341'),
    routes: [
      {
        path: '/7lun-log/docs',
        component: ComponentCreator('/7lun-log/docs', '0fc'),
        routes: [
          {
            path: '/7lun-log/docs',
            component: ComponentCreator('/7lun-log/docs', 'b77'),
            routes: [
              {
                path: '/7lun-log/docs/category/tutorial---basics',
                component: ComponentCreator('/7lun-log/docs/category/tutorial---basics', 'f7b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-log/docs/category/tutorial---extras',
                component: ComponentCreator('/7lun-log/docs/category/tutorial---extras', '3ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-log/docs/intro',
                component: ComponentCreator('/7lun-log/docs/intro', '054'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-log/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/7lun-log/docs/tutorial-basics/congratulations', '27e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-log/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/7lun-log/docs/tutorial-basics/create-a-blog-post', '458'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-log/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/7lun-log/docs/tutorial-basics/create-a-document', '923'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-log/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/7lun-log/docs/tutorial-basics/create-a-page', 'b64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-log/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/7lun-log/docs/tutorial-basics/deploy-your-site', 'ab3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-log/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/7lun-log/docs/tutorial-basics/markdown-features', '2f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-log/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/7lun-log/docs/tutorial-extras/manage-docs-versions', '18f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-log/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/7lun-log/docs/tutorial-extras/translate-your-site', '1eb'),
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
    path: '/7lun-log/',
    component: ComponentCreator('/7lun-log/', '8a2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

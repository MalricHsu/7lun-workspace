import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/7lun-workspace/about',
    component: ComponentCreator('/7lun-workspace/about', '1d1'),
    exact: true
  },
  {
    path: '/7lun-workspace/blog',
    component: ComponentCreator('/7lun-workspace/blog', '5c3'),
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
    path: '/7lun-workspace/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/7lun-workspace/blog/authors/all-sebastien-lorber-articles', 'af5'),
    exact: true
  },
  {
    path: '/7lun-workspace/blog/authors/yangshun',
    component: ComponentCreator('/7lun-workspace/blog/authors/yangshun', 'e1e'),
    exact: true
  },
  {
    path: '/7lun-workspace/blog/first-blog-post',
    component: ComponentCreator('/7lun-workspace/blog/first-blog-post', 'ebb'),
    exact: true
  },
  {
    path: '/7lun-workspace/blog/long-blog-post',
    component: ComponentCreator('/7lun-workspace/blog/long-blog-post', 'ce3'),
    exact: true
  },
  {
    path: '/7lun-workspace/blog/mdx-blog-post',
    component: ComponentCreator('/7lun-workspace/blog/mdx-blog-post', '323'),
    exact: true
  },
  {
    path: '/7lun-workspace/blog/tags',
    component: ComponentCreator('/7lun-workspace/blog/tags', 'ee1'),
    exact: true
  },
  {
    path: '/7lun-workspace/blog/tags/docusaurus',
    component: ComponentCreator('/7lun-workspace/blog/tags/docusaurus', '69f'),
    exact: true
  },
  {
    path: '/7lun-workspace/blog/tags/facebook',
    component: ComponentCreator('/7lun-workspace/blog/tags/facebook', '722'),
    exact: true
  },
  {
    path: '/7lun-workspace/blog/tags/hello',
    component: ComponentCreator('/7lun-workspace/blog/tags/hello', '050'),
    exact: true
  },
  {
    path: '/7lun-workspace/blog/tags/hola',
    component: ComponentCreator('/7lun-workspace/blog/tags/hola', '9d3'),
    exact: true
  },
  {
    path: '/7lun-workspace/blog/welcome',
    component: ComponentCreator('/7lun-workspace/blog/welcome', '718'),
    exact: true
  },
  {
    path: '/7lun-workspace/portfolio',
    component: ComponentCreator('/7lun-workspace/portfolio', '7ab'),
    exact: true
  },
  {
    path: '/7lun-workspace/docs',
    component: ComponentCreator('/7lun-workspace/docs', 'd77'),
    routes: [
      {
        path: '/7lun-workspace/docs',
        component: ComponentCreator('/7lun-workspace/docs', '06e'),
        routes: [
          {
            path: '/7lun-workspace/docs',
            component: ComponentCreator('/7lun-workspace/docs', '331'),
            routes: [
              {
                path: '/7lun-workspace/docs/category/tutorial---basics',
                component: ComponentCreator('/7lun-workspace/docs/category/tutorial---basics', 'f08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/category/tutorial---extras',
                component: ComponentCreator('/7lun-workspace/docs/category/tutorial---extras', 'a0d'),
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
                path: '/7lun-workspace/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/7lun-workspace/docs/tutorial-basics/congratulations', '559'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/7lun-workspace/docs/tutorial-basics/create-a-blog-post', 'cf3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/7lun-workspace/docs/tutorial-basics/create-a-document', '4a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/7lun-workspace/docs/tutorial-basics/create-a-page', 'ddb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/7lun-workspace/docs/tutorial-basics/deploy-your-site', '4fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/7lun-workspace/docs/tutorial-extras/manage-docs-versions', 'a2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/7lun-workspace/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/7lun-workspace/docs/tutorial-extras/translate-your-site', '9fa'),
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

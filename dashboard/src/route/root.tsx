import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from '@tanstack/react-router'

const rootRoute = createRootRoute({
  component: () => <Outlet />,
  notFoundComponent: () => <div> Not Found</div>,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <div>Index</div>,
})

const pagesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'pages',
  component: () => <div>Pages</div>,
})

const pageIndexRoute = createRoute({
  getParentRoute: () => pagesRoute,
  path: '/',
  component: () => <div>Pages</div>,
})

const pageRoute = createRoute({
  getParentRoute: () => pagesRoute,
  path: '$pageId',
  component: () => <div>post</div>,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  pagesRoute.addChildren([pageRoute, pageIndexRoute]),
])
export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
})

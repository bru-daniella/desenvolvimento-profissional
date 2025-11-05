import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
    index("pages/index.tsx"),
    ...prefix('products', [
        index('pages/products/index.tsx'),
        route(':id/details', 'pages/products/detail.tsx')
    ])
] satisfies RouteConfig;


export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-3BOHXISD.js"
    ],
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1633, hash: '0b9ae039770b6649d92f025241de15d61ba1d0fa4222f2445dd68db174c45b6b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1226, hash: '3c0fce9c079069f7a1f40d3b6f48d1223ae4f51cebc63f6ec0d80cf875180a4d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 95224, hash: '6c4cb3fa08f3943aa0211aeefab3fff1c56e2e37b7439835af5122cfce457e90', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-52LDGHUX.css': {size: 2411, hash: 'RZki6UMd8Ps', text: () => import('./assets-chunks/styles-52LDGHUX_css.mjs').then(m => m.default)}
  },
};


export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-VMGPDNWW.js"
    ],
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1633, hash: '9da35dfb1148e4ce12cf0e0e9ddeb6f4e0223024068a875eea3379c14a1b053c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1226, hash: '7b5df4ea9af5876d3315602f20c0c8c886931ee4265d573a08738a2376aab303', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 93309, hash: '08d5a39a09763e2ee4424ce01e23d18260ca101767c9592a5826b29afc8cc7d0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-Z4LDPMX7.css': {size: 2411, hash: 'TpR1DzENsEo', text: () => import('./assets-chunks/styles-Z4LDPMX7_css.mjs').then(m => m.default)}
  },
};

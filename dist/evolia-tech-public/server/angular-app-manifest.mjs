
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-5E3FSRSP.js"
    ],
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1633, hash: '195baae898b0abaa3fc95ce2ab45a91b3a34f0a06247293ea9f58db8ccad659e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1226, hash: '0b58c440cd97b8f3d5a1f8dc1d70116e26af01657844f4fe35734fa51f07313a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 81233, hash: '6efe71555fc0a4add2632182657121144aa821ff412b3a2ecbba1c5b6a0f82fa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-Z4LDPMX7.css': {size: 2411, hash: 'TpR1DzENsEo', text: () => import('./assets-chunks/styles-Z4LDPMX7_css.mjs').then(m => m.default)}
  },
};

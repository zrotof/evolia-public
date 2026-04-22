
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-L6UIMPRO.js"
    ],
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1633, hash: '8ed2510fbd8538b6bed31ad04000438cf781642a62f070c6c2243c29f6c61d0f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1226, hash: '6159e779151b287a7542ccfbb6a5196873f83ee10fc31751d2825a459bbdd234', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 95369, hash: 'a46eadf4381e837105f613da6a28370ca844acdbdb7776593ebe53087ab6e92d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-WSD4L6JC.css': {size: 4863, hash: 'eC0CDBelxKk', text: () => import('./assets-chunks/styles-WSD4L6JC_css.mjs').then(m => m.default)}
  },
};

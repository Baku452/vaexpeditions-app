const withPlugins = require('next-compose-plugins');
//const withPurgeCss = require('next-purgecss');
// const withImages = require('next-images');
const withSvgr = require('next-svgr');

const nextConfig = {
  generateEtags: false,
  poweredByHeader: false,
  devIndicators: {
    autoPrerender: false,
  },
  //pageExtensions: ['page.jsx', 'page.js'],
};

module.exports = withPlugins([/* withPurgeCss, */ withSvgr], nextConfig);

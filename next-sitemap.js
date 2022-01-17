module.exports = {
  siteUrl: 'https://vaexpeditions.com/',
  generateRobotsTxt: true,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: 'googlebot',
        allow: '/',
        disallow: '/*.php$',
      },
      {
        userAgent: 'bingbot',
        allow: '/',
        disallow: '/*.php$',
      },
    ],
  },
};

module.exports = {
  siteUrl: 'https://valenciatravelcusco.com/',
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

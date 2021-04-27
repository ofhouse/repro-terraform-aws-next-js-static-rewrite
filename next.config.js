module.exports = {
  async rewrites() {
    return [
      {
        source: '/apple-app-site-association',
        destination: '/apple-app-site-association.json',
      },
    ];
  },
};

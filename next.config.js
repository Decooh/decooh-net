module.exports = {
    async redirects() {
      return [
        {
          source: '/uva',
          destination: '/uva.html',
          permanent: true,
        },
      ]
    },
  }
module.exports = {
  cookieSecret: 'test',
  mongo: {
    development: {
        connectionString: 'mongodb://init:init@ds153501.mlab.com:53501/jerseytalk'
    },
    production: {
        connectionString: 'mongodb://init:init@ds153501.mlab.com:53501/jerseytalk'
    }
  }
}

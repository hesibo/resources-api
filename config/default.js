/**
 * The configuration file.
 */

module.exports = {
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
  PORT: process.env.PORT || 3000,

  AUTH_SECRET: process.env.AUTH_SECRET || 'mysecret',
  VALID_ISSUERS: process.env.VALID_ISSUERS || '["https://api.topcoder-dev.com", "https://api.topcoder.com", "https://topcoder-dev.auth0.com/"]',

  AUTH0_URL: process.env.AUTH0_URL,
  AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE || 'https://m2m.topcoder-dev.com/',
  TOKEN_CACHE_TIME: process.env.TOKEN_CACHE_TIME,
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID || 'enjw1810eDz3XTwSO2Rn2Y9cQTrspn3B',
  AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET || '6wzC0_gfeuM4yEWOoobl5BylXsI44lczJjGTBABM2EJpbg9zucUwTGlgO7WWbHdt',
  AUTH0_PROXY_SERVER_URL: process.env.AUTH0_PROXY_SERVER_URL || 'https://topcoder-dev.auth0.com/oauth/token',

  MEMBER_API_URL: process.env.MEMBER_API_URL || 'https://api.topcoder-dev.com/v3/members',
  CHALLENGE_API_URL: process.env.CHALLENGE_API_URL || 'http://localhost:4000/v5/challenges',

  DYNAMODB: {
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || 'FAKE_ACCESS_KEY',
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || 'FAKE_SECRET_ACCESS_KEY',
    AWS_REGION: process.env.AWS_REGION || 'us-east-1',
    IS_LOCAL: process.env.IS_LOCAL || true,
    URL: process.env.DYNAMODB_URL || 'http://localhost:7777'
  },

  SCOPES: {
    READ: process.env.SCOPE_READ || 'read:resources',
    CREATE: process.env.SCOPE_CREATE || 'create:resources',
    DELETE: process.env.SCOPE_DELETE || 'delete:resources',
    UPDATE: process.env.SCOPE_UPDATE || 'update:resources',
    ALL: process.env.SCOPE_ALL || 'all:resources'
  }
}
//* Configs Dev
const development = {
  app: {
    // Todo: Node dev
    node_dev: process.env.NODE_ENV,
  },
}

//* Configs Production
const production = {
  app: {
    // Todo: Node production
    node_dev: process.env.NODE_ENV,
  },
}

const configs = {
  development,
  production,
}

const env = process.env.NODE_ENV
export default configs[env]

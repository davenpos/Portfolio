import webpack from 'webpack'
import dotenv from 'dotenv'

const env = dotenv.config().parsed || {}

const nextConfig = {
  webpack(config: any) {
    config.plugins.push(new webpack.EnvironmentPlugin(env))
    return config
  },
}

export default nextConfig
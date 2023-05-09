/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')
const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  compiler:{
    styledComponents:true,
  },
  i18n:{
    locales:['en'],
    defaultLocale:'en'
  }
}

const bundleAnalyzer = withBundleAnalyzer({
  enabled:process.env.ANALYZE === 'true',
})

//module.exports = withPlugins([bundleAnalyzer], nextConfig)
module.exports = () => {

  const plugins =[bundleAnalyzer];

  const config =plugins.reduce((acc, next) => next(acc), {
    ...nextConfig
  })

  return config;

} 

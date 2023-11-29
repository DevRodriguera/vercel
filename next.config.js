/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig


module.exports = {
  images:{
    dangerouslyAllowSVG: true,
    remotePatterns:[
      {
        protocol:'https',
        hostname:'img.shields.io',
        port:'',
        pathname:'/badge/**'
      },
    ],
  },
}
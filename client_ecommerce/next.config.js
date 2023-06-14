/** @type {import('next').NextConfig} */
// const nextConfig = {}
const nextConfig = {
    modularizeImports: {
      "react-bootstrap": {
        transform: "react-bootstrap/{{member}}",
      },
      lodash: {
        transform: "lodash/{{member}}",
      },
    },
    // ...
  }

module.exports = nextConfig

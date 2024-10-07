/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "netlify", // This is specific for Netlify
  publicPath: "/build/",
  assetsBuildDirectory: "public/build",
  serverBuildDirectory: "netlify/functions/server/build",
  devServerPort: 8002,
};

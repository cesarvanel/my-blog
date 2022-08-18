/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPEMENT_SERVER } = require("next/constants");
module.exports = (phase) => {

  return {
    reactStrictMode: true,
    swcMinify: true,
    env: {
      mongodb_username: "cesarvanel",
      mongodb_password: "VGhbyGagh4LS9LCJ",
      mongodb_cluster: "cluster0",
      mongodb_db_Name: "myblog",
    },
  };
};

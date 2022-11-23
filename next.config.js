import axios from "axios";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

window.axios = axios;
module.exports = nextConfig;

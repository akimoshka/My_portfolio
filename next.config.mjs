/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
    const repo = process.env.GITHUB_REPOSITORY.split('/')[1];
    basePath = `/${repo}`;
    assetPrefix = `${basePath}/`;
}

const nextConfig = {
    basePath,
    assetPrefix,
    reactStrictMode: true,
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
};

export default nextConfig;

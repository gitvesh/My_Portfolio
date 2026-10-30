import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  experimental: {
    // On Windows, child process termination signals often trigger OS-level `kill EPERM`.
    // Disabling workerThreads on Windows ensures 100% reliable local builds, while Vercel (Linux)
    // uses standard multi-core workers.
    ...(process.platform === "win32"
      ? {
          workerThreads: false,
          cpus: 1,
        }
      : {}),
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;

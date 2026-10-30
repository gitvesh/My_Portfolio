# Bhavesh Jadhav — Portfolio

A responsive personal portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, Motion, and Lucide React. Its AI systems illustration is an interactive SVG/CSS diagram, so the site does not depend on WebGL, external AI services, paid assets, or API keys.

## Local development

Requirements: Node.js 20.9 or newer (Node 22 LTS recommended) and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Deployment

The project can be deployed to Vercel's free Hobby tier or another host that supports Next.js. Import the repository, use the default `npm run build` command, and deploy. No environment variables are required. For self-hosting, run `npm run build` followed by `npm run start`.

## Contact form

There is no message delivery backend. Submitting the form opens the visitor's email application with a prefilled `mailto:` draft; the page explains that no message is sent or stored by the website.

## Photograph and project facts

The supplied photograph is included as an optimized local WebP image. Project detail pages use the supplied project descriptions and only claim implementation details or results that were available. LangGraph project implementation details, and several other projects' technical details, were not present in the workspace when the portfolio was built; those pages call out that limitation instead of guessing.

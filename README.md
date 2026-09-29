# Next.js React Starter

Reusable private template for new frontend projects. It starts with Next.js 16 App Router, React 19, TypeScript 6, Tailwind CSS 4, ESLint, and a production-ready Node 24 Docker setup. It contains no project-specific branding, API contract, Firebase configuration, or authentication flow.

## Use this template

On GitHub, choose **Use this template** to create a new repository. Rename the app in `package.json` and replace `src/app/page.tsx` and the metadata in `src/app/layout.tsx` for the new project.

## Run locally

Use Node.js 24 LTS and npm. From this folder:

```bash
npm ci
npm run dev
```

Open http://localhost:3000. No environment variables or backend are required.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
npm audit
```

The lockfile pins the exact dependency tree. `npm outdated` shows newer releases. `@types/node` follows Node 24. ESLint stays on 9 because Next.js 16's bundled React lint plugin does not yet support 10. TypeScript stays on 6 because the bundled TypeScript ESLint parser does not yet support 7. Review these pins when the upstream tooling updates.

## Docker

```bash
docker compose up --build
```

The container serves the app at http://localhost:3000.

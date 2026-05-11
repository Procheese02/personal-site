# Jingyao Qi Personal Website

Resume-first personal portfolio for Jingyao Qi, built with Astro, React, TypeScript, and Tailwind CSS.

The site is designed as a portable static website: it can run first on AWS Amplify or S3 + CloudFront, then move to another static host or cloud CDN without changing the app architecture.

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Astro. The English site is at `/` and the Chinese site is at `/zh/`.

## Build

```bash
npm run build
```

The production output is generated in `dist/`.

## AWS deployment option 1: Amplify Hosting

1. Push this project to a Git repository.
2. In AWS Amplify, create a new app from the repository.
3. Use these build settings:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

Amplify will serve the static `dist/` output and can manage a custom domain later.

## AWS deployment option 2: S3 + CloudFront

1. Run `npm run build`.
2. Upload the contents of `dist/` to an S3 bucket configured for static hosting or private origin access.
3. Put CloudFront in front of the bucket.
4. Configure default root object as `index.html`.
5. Add a custom domain and TLS certificate through AWS Certificate Manager if needed.

## Portability

Because the site builds to plain static files, the same `dist/` directory can be deployed to Cloudflare Pages, Netlify, Vercel, Azure Static Web Apps, GitHub Pages, or any object storage plus CDN setup.

## Content editing

Most site content lives in:

- `src/content/profile.ts`
- `src/content/projects.ts`
- `src/content/i18n.ts`

Update those files to change resume details, project entries, bilingual copy, or skills.

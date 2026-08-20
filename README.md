# myDiagnostic documentation

Public documentation site for myDiagnostic, the Shopify quiz and product recommendation app by Webesencia.

The site is built with [Docusaurus](https://docusaurus.io/) (classic preset, TypeScript). Documentation pages live in `docs/`, the sidebar structure in `sidebars.ts`, and site settings in `docusaurus.config.ts`.

## Local development

```bash
npm install
npm start
```

The dev server runs on http://localhost:3000 and reloads on save.

To check the production output locally:

```bash
npm run build
npm run serve
```

## Deployment

Every push to `main` triggers the workflow in `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. The workflow can also be started manually from the Actions tab.

The published site is served at https://docs.webesencia.com, configured through `static/CNAME`.

# How to Reproduce

> [!NOTE]
> This issue is only reproducible in the production environment.

```bash
pnpm install
```

```bash
pnpm build && pnpm start
```

## Problem #1 (Dynamic CSS Leaking)

1. Go to `http://localhost:3000/next-dynamic`.
2. The `Red Button` is red.
3. Open the Browser Devtools `Elements` tab.
4. `<head>` contains a `link[rel="stylesheet"]`.
4. Click on `/no-red-button`.
5. You will see the text `Stylesheet is leaked: true`.
6. `<head>` still contains a `link[rel="stylesheet"]`.

## Problem #2 (Static CSS Page → Dynamic CSS Page Style Miss)

1. Go to `http://localhost:3000`.
2. The `Red Button` is red.
3. Open the Browser Devtools `Elements` tab.
4. `<head>` contains a `link[rel="stylesheet"]` with `data-n-p` attribute.
5. Click on `/next-dynamic`.
6. The `Red Button` is gray.
7. `<head>` no longer contains `link[rel="stylesheet"]`.

> **Note:** The `data-n-p` attribute means that the stylesheet was server rendered.

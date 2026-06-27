/**
 * Prefix an internal asset path with the site base URL.
 * Works on root hosts (Cloudflare, custom domain → base "/") and on
 * subpath hosts like GitHub Pages (base "/Amruta/"). Use for every
 * absolute internal asset (images, favicon, etc.).
 */
export const asset = (path: string): string =>
  import.meta.env.BASE_URL.replace(/\/$/, "") + "/" + path.replace(/^\//, "");

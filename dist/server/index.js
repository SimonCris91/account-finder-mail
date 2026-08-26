import { html } from "./html.js";

const headers = {
  "content-type": "text/html; charset=utf-8",
  "cache-control": "public, max-age=300",
  "x-content-type-options": "nosniff",
  "referrer-policy": "strict-origin-when-cross-origin"
};

export default {
  async fetch() {
    return new Response(html, { headers });
  }
};

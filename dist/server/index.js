import { html } from "./html.js";
import { heroPngBase64 } from "./hero-image.js";

const htmlHeaders = {
  "content-type": "text/html; charset=utf-8",
  "cache-control": "public, max-age=300",
  "x-content-type-options": "nosniff",
  "referrer-policy": "strict-origin-when-cross-origin"
};

const imageHeaders = {
  "content-type": "image/png",
  "cache-control": "public, max-age=86400",
  "x-content-type-options": "nosniff"
};

function base64ToBytes(value) {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/hero-account-security.png") {
      return new Response(base64ToBytes(heroPngBase64), { headers: imageHeaders });
    }
    return new Response(html, { headers: htmlHeaders });
  }
};

// Optional: eigener RSS-Proxy als Cloudflare Worker (kostenlos).
// 1. dash.cloudflare.com → Workers & Pages → Create → "Hello World" Worker
// 2. Code durch diese Datei ersetzen → Deploy
// 3. In Tagwerk unter Einstellungen → RSS-Proxy eintragen:  https://DEIN-NAME.workers.dev/?url=
export default {
  async fetch(request) {
    const target = new URL(request.url).searchParams.get('url');
    if (!target || !/^https?:\/\//.test(target)) return new Response('?url= fehlt', { status: 400 });
    const r = await fetch(target, { headers: { 'User-Agent': 'Mozilla/5.0 Tagwerk RSS' }, cf: { cacheTtl: 600 } });
    return new Response(r.body, {
      status: r.status,
      headers: { 'Content-Type': r.headers.get('Content-Type') || 'text/xml', 'Access-Control-Allow-Origin': '*' },
    });
  },
};

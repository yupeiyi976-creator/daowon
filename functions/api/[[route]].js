/* Her Lib API — Cloudflare Pages Function */

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const path = url.pathname.replace('/api/', '');

  // CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers });
  }

  try {
    // GET /api/submissions
    if (path === 'submissions' && request.method === 'GET') {
      const data = await env.HERLIB_DATA.get('submissions', 'json') || [];
      return new Response(JSON.stringify(data), { headers });
    }

    // POST /api/submissions
    if (path === 'submissions' && request.method === 'POST') {
      const body = await request.json();
      const data = (await env.HERLIB_DATA.get('submissions', 'json')) || [];
      body.id = Date.now().toString(36) + Math.random().toString(36).substring(2, 6);
      body.time = new Date().toISOString();
      body.status = 'pending';
      data.push(body);
      await env.HERLIB_DATA.put('submissions', JSON.stringify(data));
      return new Response(JSON.stringify({ ok: true, id: body.id }), { headers });
    }

    // PATCH /api/submissions/:id
    const patchMatch = path.match(/^submissions\/(.+)$/);
    if (patchMatch && request.method === 'PATCH') {
      const id = patchMatch[1];
      const data = (await env.HERLIB_DATA.get('submissions', 'json')) || [];
      const body = await request.json();
      const idx = data.findIndex(s => s.id === id);
      if (idx >= 0) {
        if (body.status) data[idx].status = body.status;
        await env.HERLIB_DATA.put('submissions', JSON.stringify(data));
        return new Response(JSON.stringify({ ok: true }), { headers });
      }
      return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers });
    }

    // DELETE /api/submissions/:id
    if (patchMatch && request.method === 'DELETE') {
      const id = patchMatch[1];
      const data = (await env.HERLIB_DATA.get('submissions', 'json')) || [];
      const filtered = data.filter(s => s.id !== id);
      await env.HERLIB_DATA.put('submissions', JSON.stringify(filtered));
      return new Response(JSON.stringify({ ok: true }), { headers });
    }

    // GET /api/feedbacks
    if (path === 'feedbacks' && request.method === 'GET') {
      const data = await env.HERLIB_DATA.get('feedbacks', 'json') || [];
      return new Response(JSON.stringify(data), { headers });
    }

    // POST /api/feedbacks
    if (path === 'feedbacks' && request.method === 'POST') {
      const body = await request.json();
      const data = (await env.HERLIB_DATA.get('feedbacks', 'json')) || [];
      body.id = Date.now().toString(36) + Math.random().toString(36).substring(2, 6);
      body.time = new Date().toISOString();
      data.push(body);
      await env.HERLIB_DATA.put('feedbacks', JSON.stringify(data));
      return new Response(JSON.stringify({ ok: true, id: body.id }), { headers });
    }

    // GET /api/collections?userId=xxx
    if (path === 'collections' && request.method === 'GET') {
      const userId = url.searchParams.get('userId');
      if (!userId) return new Response(JSON.stringify({ error: 'Missing userId' }), { status: 400, headers });
      const all = (await env.HERLIB_DATA.get('collections', 'json')) || {};
      return new Response(JSON.stringify(all[userId] || []), { headers });
    }

    // POST /api/collections
    if (path === 'collections' && request.method === 'POST') {
      const body = await request.json();
      const all = (await env.HERLIB_DATA.get('collections', 'json')) || {};
      if (!all[body.userId]) all[body.userId] = [];
      all[body.userId] = body.data || [];
      await env.HERLIB_DATA.put('collections', JSON.stringify(all));
      return new Response(JSON.stringify({ ok: true }), { headers });
    }

    // GET /api/comments?bookId=xxx
    if (path === 'comments' && request.method === 'GET') {
      const bookId = url.searchParams.get('bookId');
      const all = (await env.HERLIB_DATA.get('comments', 'json')) || {};
      const data = bookId ? (all[bookId] || []) : [];
      return new Response(JSON.stringify(data), { headers });
    }

    // POST /api/comments
    if (path === 'comments' && request.method === 'POST') {
      const body = await request.json();
      const all = (await env.HERLIB_DATA.get('comments', 'json')) || {};
      if (!all[body.bookId]) all[body.bookId] = [];
      const comment = {
        id: 'cmt-' + Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
        book_id: body.bookId,
        user_id: body.userId || 'anonymous',
        user_email: body.userEmail || '读者',
        content: body.content,
        rating: body.rating || 5,
        created_at: new Date().toISOString()
      };
      all[body.bookId].push(comment);
      await env.HERLIB_DATA.put('comments', JSON.stringify(all));
      return new Response(JSON.stringify({ ok: true, id: comment.id }), { headers });
    }

    // DELETE /api/comments/:id
    const cmtMatch = path.match(/^comments\/(.+)$/);
    if (cmtMatch && request.method === 'DELETE') {
      const id = cmtMatch[1];
      const all = (await env.HERLIB_DATA.get('comments', 'json')) || {};
      Object.keys(all).forEach(function(bid) {
        all[bid] = all[bid].filter(function(c) { return c.id !== id; });
      });
      await env.HERLIB_DATA.put('comments', JSON.stringify(all));
      return new Response(JSON.stringify({ ok: true }), { headers });
    }

    return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500, headers });
  }
}

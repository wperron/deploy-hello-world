cosnt PING_PATTERN = new URLPattern({ pathname: "/ping" });

Deno.serve(async (req) => {
  let traceparent = req.headers.get("traceparent") ?? "unknown";
  console.log(`${req.method} ${req.url} traceparent: ${traceparent}`);

  const match = PING_PATTERN.exec(req.url);
  if (match) {
    return new Response("PONG");
  }

  return new Response(JSON.stringify(Deno.env.toObject(), null, 2));
});

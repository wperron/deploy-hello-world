Deno.serve(async (req) => {
  let traceparent = req.headers.get("traceparent") ?? "unknown";
  console.log(`${req.method} ${req.url} traceparent: ${traceparent}`);

  return new Response(JSON.stringify(Deno.env.toObject(), null, 2));
});

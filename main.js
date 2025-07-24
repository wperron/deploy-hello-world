Deno.serve(async (req) => {
  let traceparent = req.headers.get("traceparent") ?? "unknown";
  console.log(`${req.method} ${req.url} traceparent: ${traceparent}`);
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  return new Response(JSON.stringify(Deno.env.toObject()));
});

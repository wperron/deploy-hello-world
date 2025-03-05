Deno.serve((req) => {
  console.log(`${req.method} ${req.url}`);
  return new Response(JSON.stringify(Deno.env.toObject()));
});

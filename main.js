Deno.serve((req) => {
  console.log(`${req.method} ${req.url}`);
  return new Response("Hello, world!");
});

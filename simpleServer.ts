import { serve } from "https://deno.land/std@0.149.0/http/server.ts"

serve((_req) => new Response("Hello"), {
  onListen({ port, hostname }) {
    console.log(`Listening on ${hostname}:${port}`)
  },
})

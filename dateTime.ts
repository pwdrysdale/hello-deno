import * as mod from "https://deno.land/std@0.149.0/datetime/mod.ts"

console.log(mod.dayOfYear(new Date()))
console.log(mod.difference(new Date(), new Date("1988-10-10")))

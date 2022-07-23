import * as mod from "https://deno.land/std@0.149.0/fmt/colors.ts"

type Message = {
  text: string
  type: "error" | "success" | "info"
}

const greeting: Message = { text: "Hello, World!", type: "info" }

const log = (message: string, type: "error" | "success" | "info" = "info") => {
  switch (type) {
    case "error":
      console.error(mod.red(message))
      break
    case "success":
      console.log(mod.green(message))
      break
    case "info":
      console.info(mod.blue(message))
      break
    default:
      console.log(message)
  }
}

log("Hello")
log("Error", "error")
log("Success", "success")

// this does throw a run time errot
// to get the compile time error use the --check flag
// e.g. deno run --check hello.ts
// see: https://github.com/denoland/deno/issues/11340
// log(greeting)

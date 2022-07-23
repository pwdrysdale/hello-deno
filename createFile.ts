const encoder = new TextEncoder()

const greetText = encoder.encode("Hello World\nMy name is Pete")

await Deno.writeFile("hello.txt", greetText)

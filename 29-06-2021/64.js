const fs = require("fs");
let text = fs.readFileSync("sample.txt", "utf-8");
console.log(text);

text = text.replace("Hi", "Hello")

fs.writeFileSync("new.txt", text)



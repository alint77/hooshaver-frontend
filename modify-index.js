const fs = require("fs");

const inputFile = "out/index.html";

fs.readFile(inputFile, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Replace "/_next" with "_next" using the replace() method
  const updatedContent = data.replace(/\/_next/g, "_next");

  fs.writeFile(inputFile, updatedContent, "utf8", (err) => {
    if (err) {
      console.error("Error writing to the file:", err);
      return;
    }
    console.log("index.html modified successfully!");
  });
});

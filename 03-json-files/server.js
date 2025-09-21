const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "data.json");

// Function: Read JSON file asynchronously
async function readData() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading file:", err);
    return null;
  }
}

// Function: Write JSON file asynchronously
async function writeData(newData) {
  try {
    await fs.writeFile(filePath, JSON.stringify(newData, null, 2));
    console.log("✅ Data successfully written!");
  } catch (err) {
    console.error("Error writing file:", err);
  }
}

// Main function to demonstrate
async function main() {
  // Read current data
  let data = await readData();
  console.log("Current data:", data);

  // Add a new user
  data.users.push({ id: 4, name: "David" });
  await writeData(data);

  // Read again
  const updatedData = await readData();
  console.log("Updated data:", updatedData);
}

// Run main
main();

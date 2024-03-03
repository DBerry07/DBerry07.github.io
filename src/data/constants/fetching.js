export async function getText(fileName) {
  let solution = undefined;
  const fileURLStart = "http://localhost:5173/src/data/";
  const fileURL = fileURLStart + fileName;

  try {
    const response = await fetch(fileURL);
    if (!response.ok) {
      throw new Error(`Error fetching file: ${response.status}`);
    }

    const text = await response.text();
    const lines = text.split("\n"); // Split by newline character
    solution = lines;

    // Insert newline characters after each line
    // const formattedText = lines.join('\n');

    // console.log('Formatted text with newlines:');
    // console.log(formattedText);
    console.log(lines);
  } catch (error) {
    console.error("Error reading local file:", error);
  }

  return solution;
}

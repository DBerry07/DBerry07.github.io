export async function getText(fileURL) {
  let solution = undefined;

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

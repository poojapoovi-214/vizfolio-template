export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  // Temporary fake AI response (later we connect real OpenAI API)
  const response = `✨ Generated portfolio idea for: "${prompt}"`;

  res.status(200).json({ result: response });
}

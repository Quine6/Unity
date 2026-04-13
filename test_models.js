const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
async function run() {
  const envFile = fs.readFileSync('.env.local', 'utf8');
  const keyMatch = envFile.match(/GEMINI_API_KEY=(.*)/);
  const key = keyMatch[1].trim();
  const genAI = new GoogleGenerativeAI(key);

  const models = ['gemini-2.5-flash-lite', 'gemini-flash-latest', 'gemini-2.5-pro'];
  for (const m of models) {
    console.log(`Testing ${m}...`);
    try {
      const model = genAI.getGenerativeModel({ model: m });
      const res = await model.generateContent("Say hello");
      console.log(`[SUCCESS] ${m}: ` + res.response.text().trim());
    } catch (e) {
      console.log(`[ERROR] ${m}: ` + e.message);
    }
  }
}
run();

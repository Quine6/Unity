const fs = require('fs');

const envFile = fs.readFileSync('.env.local', 'utf8');
const keyMatch = envFile.match(/GEMINI_API_KEY=(.*)/);
if (!keyMatch) {
  console.error("No key found");
  process.exit(1);
}
const key = keyMatch[1].trim();

fetch('https://generativelanguage.googleapis.com/v1beta/models?key=' + key)
  .then(res => res.json())
  .then(data => {
    if (data.models) {
      console.log("Available models:");
      const supported = data.models.filter(m => m.supportedGenerationMethods.includes("generateContent"));
      console.log(supported.map(m => m.name).join('\n'));
    } else {
      console.log(data);
    }
  })
  .catch(console.error);

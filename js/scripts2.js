// Imports the Google Cloud client library
const Translate = require('@google-cloud/translate');

// Your Translate API key
const apiKey = 'YOUR_API_KEY';

// Instantiates a client
const translateClient = Translate({
  key: apiKey
});

// The text to translate
const text = 'Hello, world!';
// The target language
const target = 'ru';

// Translates some text into Russian
translateClient.translate(text, target, (err, translation) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Text: ${text}`);
  console.log(`Translation: ${translation}`);
});

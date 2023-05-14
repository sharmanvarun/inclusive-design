const express = require('express');
const speech = require('@google-cloud/speech');

const app = express();
const port = 3000;

app.use(express.json({ limit: '50mb' }));

app.post('/transcribe', async (req, res) => {
  const { audioContent } = req.body;
  const client = new speech.SpeechClient();

  const config = {
    encoding: 'LINEAR16',
    sampleRateHertz: 16000,
    languageCode: 'en-US',
  };
  const audio = {
    content: audioContent,
  };

  const request = {
    config: config,
    audio: audio,
  };

  try {
    const [response] = await client.recognize(request);
    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');
    res.json({ transcription });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error transcribing audio' });
  }
});

app.listen(port, () => {
  console.log(`Speech-to-Text microservice listening at http://localhost:${port}`);
});

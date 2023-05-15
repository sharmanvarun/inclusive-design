const express = require('express');
const speechToText = require('./speech-to-text');
const app = express();
const PORT = 4000; // Or any other port you prefer

// Use the speech-to-text microservice Old code check speech-to-text.js for new code
// app.use('/api', speechToText);

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Node.js project listening on port ${PORT}`);
// });
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('https://siko-chatbot.vercel.app/', (req, res) => {
  const { message } = req.body;
  let response;

  if (message.toLowerCase().includes('hello')) {
    response = 'Hello there!';
  } else if (message.toLowerCase().includes('weather')) {
    response = 'The weather is nice today!';
  } else {
    response = 'I am not sure what you mean.';
  }

  res.json({ response });
});

app.listen(3000, () => {
  console.log('Chatbot server listening on port 3000!');
});

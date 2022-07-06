const express = require('express');
const morgan = require('morgan');
const redis = require('redis');

const app = express();
const db = redis.createClient({
  url: process.env.DATABASE_URL || null,
});

if (process.env.TRUST_PROXY == 'true') {
  app.set('trust proxy');
}
if (process.env.NO_LOGS != 'false') {
  app.use(morgan('common'));
}

app.get('/', (_req, res) => {
  res.end('qre v1.0');
});

app.get('/:id', async (req, res) => {
  await db.connect()
  const url = await db.hGet('redirects', req.params.id);
  if (url) {
    res.redirect(url);
  } else {
    res.status(404).end('redirect not found');
  }
  await db.quit();
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Listening on ' + (process.env.PORT || 8080));
});

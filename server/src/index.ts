import dotenv from 'dotenv';

import db from './db';
import app from './app';

dotenv.config();

const dbUri = process.env.DB_URI || '';
const appPort = parseInt(process.env.PORT || '5000');

db.setup(dbUri);
app.listen(appPort, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    return console.error(err);
  }

  // eslint-disable-next-line no-console
  return console.log(`server is listening on ${appPort}`);
});

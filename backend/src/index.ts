import express from 'express';
import connectToDB from './utils/connectToDB';

const app = express();
//app.use(express.urlencoded({ extended: false }));
//app.use(express.json());

connectToDB();
app.get('/', (request, response) => {
  return response.json({ alive: true })
})

app.listen(3333, () => console.log("I'm alive! 🤖 --> http://localhost:3333"))

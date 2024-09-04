import express from 'express';

const app = express()
const port = process.env.PORT || 3100;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/jokes', (req, res) => {
  //get list of 5 jokes
  const jokes = [
    {
      id: '1',
      title: 'Why did the chicken cross the road?',
      joke: 'To get to the other side!'
  },
  {
    id: '2',
    title: 'Why did the chicken cross the road?',
    joke: 'To get to the other side!'
},
{
  id: '3',
  title: 'Why did the chicken cross the road?',
  joke: 'To get to the other side!'
},
{
  id: '4',
  title: 'Why did the chicken cross the road?',
  joke: 'To get to the other side!'
}

]
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

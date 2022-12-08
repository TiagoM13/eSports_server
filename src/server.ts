import express from 'express';

const app = express();

app.get('/games', (request, response) => {
  return response.json([
    { id: '1', name: 'God of War' }
  ]);
});

app.post('/ads', (request, response) => {
  return response.json([]);
});

app.get('/games/:id/ads', (request, response) => {
  // const gameID = request.params.id;

  return response.json([
    { id: '1', name: 'Anúncio 1 ' },
    { id: '2', name: 'Anúncio 2 ' },
    { id: '3', name: 'Anúncio 3 ' },
    { id: '4', name: 'Anúncio 4 ' },
    { id: '4', name: 'Anúncio 5 ' }
  ])
});

app.get('/ads/:id/discord', (request, response) => {
  // const adID = request.params.id;

  return response.json([])
});

app.listen(3333);

import express from 'express';
import { Request, Response, Application } from 'express';

interface Puppy {
  id: number,
  breed: string,
  name: string,
  birthDate: string, 
}

const puppies: Puppy[] = [
  {
    id: 1,
    breed: 'pug',
    name: 'Puggy',
    birthDate: '1994-02-28',
  },
  {
    id: 2,
    breed: 'poodle',
    name: 'Poodles',
    birthDate: '1995-07-12',
  },
  {
    id: 3,
    breed: 'shiba',
    name: 'Shibs',
    birthDate: '2012-08-05',
  },
  {
    id: 4,
    breed: 'dachshund',
    name: 'Birkenstock',
    birthDate: '2012-08-20',
  },

]

const newId = Date.now();

const app: Application = express();

app.use(express.json());

app.get('/api/puppies', (_req: Request, res: Response) => {
  return res.status(200).json(puppies);
});

app.get('/api/puppies/:id', (req: Request, res: Response) => {
  return res.status(200).json(puppies.find((pup: Puppy) => pup.id === Number(req.params.id)));
});

app.post('/api/puppies', (req: Request, res: Response) => {
 const newPuppy: Puppy = {
  id: newId,
  breed: req.body?.breed,
  name: req.body?.name,
  birthDate: req.body?.birthDate
 };
 puppies.push(newPuppy);
 return res.setHeader('Location', `/api/puppies/${newId}`).status(200).json(newPuppy);
});

app.put('/api/puppies/:id', (req: Request, res: Response) => {
  const newPuppy: Puppy = {
    id: newId,
    breed: req.body?.breed,
    name: req.body?.name,
    birthDate: req.body?.birthDate
   };
  puppies.splice(puppies.findIndex((pup: Puppy) => pup.id === Number(req.params.id)), 1, newPuppy);
  res
    .status(200)
    .json(newPuppy);
});

app.delete('/api/puppies/:id', (req: Request, res: Response) => {
  puppies.splice(puppies.findIndex((pup: Puppy) => pup.id === Number(req.params.id)), 1);
  res
    .status(200)
    .send();
});

export default app;

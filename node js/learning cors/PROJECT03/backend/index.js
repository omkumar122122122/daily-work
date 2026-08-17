import express from 'express';
import cors from 'cors';


const app = express();


app.use(cors()); 
app.use(express.json()); 


let items = [{ id: 1, name: 'Learn React' }];


app.post('/api/items', (req, res) => {
  const newItem = { 
    id: Date.now(), 
    name: req.body.name 
  };
  items.push(newItem);
  res.status(201).json(newItem); 
});


app.put('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const index = items.findIndex(item => item.id === itemId);
  
  if (index !== -1) {
    items[index].name = req.body.name; 
    res.json(items[index]);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});


app.delete('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  items = items.filter(item => item.id !== itemId);
  res.status(204).send(); 
});

app.listen(5000, () => console.log('Server running on port 5000'));
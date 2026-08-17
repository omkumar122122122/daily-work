import React from 'react'

function App() {

  const createItem = async () => {
    const response = await fetch('http://localhost:5000/api/items' , {
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name:"New Item"})
    });
    const newItem = await response.json();
    console.log(newItem);
  };
  const updateItem = async (id) => {
    const reponse = await fetch(`http://localhost:5000/api/items/${id}` , {
      method:"PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name:"Updated Item"})
    });
    const updatedItem = await reponse.json();
    console.log(updatedItem);
  }
  const deleteItem = async (id) => {
    await fetch(`http://localhost:5000/api/items/${id}` , {
      method:"DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  
  return (
    <div>

    </div>
  )
}

export default App

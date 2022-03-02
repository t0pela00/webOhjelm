import './App.css';
import Title from './components/Title'
import shoppinListItems from './components/ShoppingListItem'
import { useState } from 'react';
import ShoppingListItem from './components/ShoppingListItem';

function App() {
  const [ counterValue, setCounterValue ] = useState(0);
  const [ shoppinListItems, setShoppingListItems ] = useState([
    {  id: 1,
      name: "Maito", qty: 2,
      isChecked: false  },

    { id: 2,
      name: "Leipa",
      qty: 3,
      isChecked: false },

    { id: 3,
      name: "Juusto",
      qty: 4,
      isChecked: false},
  ]);

  const handleItemCheckedToggle = (item) => {
    console.log("toggling statys");

    let newShoppingListItems = [...shoppinListItems];
    let itemClickedIndex = newShoppingListItems.findIndex(i => item.id == i.id);
    if(itemClickedIndex != -1){
      let newElement = {...shoppinListItems[itemClickedIndex]}
      newElement.isChecked = !newElement.isChecked;
      newShoppingListItems[itemClickedIndex] = newElement;
      setShoppingListItems(newShoppingListItems);
    }
  }

  const onListAddition = (quantity, description) => {
    let newShoppinListItems = [...shoppinListItems, { 
      id: shoppinListItems.length + 1, 
      name: description,
      qty : quantity,
      isChecked : false
     }];
     setShoppingListItems(newShoppinListItems); 
  }

  const addAsia = (item) => {
   console.log(item);
    let newShoppingListItems = [...shoppinListItems];
    let itemClickedIndex = newShoppingListItems.findIndex(M => M.name === item); ;
    
    console.log(itemClickedIndex);
    if(itemClickedIndex != -1) {
      console.log("tasa2")
      let newElement = {...shoppinListItems[itemClickedIndex]}
      newElement.qty = newElement.qty+1;
      newShoppingListItems[itemClickedIndex] = newElement;
      setShoppingListItems(newShoppingListItems);
    }
    else if (itemClickedIndex == -1) {
      let newShoppinListItems = [...shoppinListItems, { 
        id: shoppinListItems.length + 1, 
        name: item,
        qty : 1,
        isChecked : false
       }];
       setShoppingListItems(newShoppinListItems);
    }
    }  
    
  return (
    <div className="App">
      <Title/>
      <ShoppingListItem listItems= { shoppinListItems } itemClickedEvent={ handleItemCheckedToggle } />
      
      <button onClick={() => addAsia("Maito") }> Maito</button>
      <button onClick={() => addAsia("Juusto") }> Juusto</button>
      <button onClick={() => addAsia("Leipa") }> Leipa</button>
      <button onClick={() => addAsia("Kananmuna") }> Kananmuna</button>
    </div>
  );
}

export default App;


 //const btn = document.createElement('Button');
 //btn.innerText = 'Milk';
 //document.body.appendChild(btn);
 //btn.addEventListener('click', () => {
 //   alert('Milk clicked');
 // });

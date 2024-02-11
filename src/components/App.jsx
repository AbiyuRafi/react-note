import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

const GroceryItem = [
  {
    id: 1,
    name: 'Kopi',
    quantity: 5,
    checked: true
  },
  {
    id: 2,
    name: 'Gula Pasir',
    quantity: 3,
    checked: false
  },
  {
    id: 3,
    name: 'Sendok Makan',
    quantity: 2,
    checked: false
  }
]

export default function App() {
  const [items, setItems] = useState(GroceryItem);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems(items.filter(item => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleClearItems() {
    setItems([])
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems} />
      <Footer items={items} />
    </div>
  )
}


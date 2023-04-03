import { useCallback, useMemo, useState } from "react";
import { Item } from "./components/Item";


function App() {
  const [items, setItems] = useState<string[]>([])
  const [wishList, setWishList] = useState<string[]>([])

  const [newItem, setNewItem] = useState('');

  function addItemToList() {
    setItems([...items, `Item ${items.length}`]);
  }

  const addItemToWishList = useCallback((item: string) => {
    setWishList(state => [...state, item])
  }, []);

  const countItemsWithOne = useMemo(() => {
    console.log('teste')
    return items.filter(item => item.includes('1')).length; 
  }, [items]);

  return (
    <div>
      <input type="text" onChange={e => setNewItem
      (e.target.value)} value={newItem} />
      <button onClick={addItemToList}>Add</button>
      <ul>
        {items.map(item => {
          return <Item countItemsWithOne={countItemsWithOne} onAddToWishList={addItemToWishList} key={item} title={item} />
        })}
      </ul>
      <div>
        Contagem: {countItemsWithOne}
      </div>
    </div>
  );
}

export default App;

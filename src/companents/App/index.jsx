import { useState } from "react";
import BasketItem from "../BasketItem";
import Calculation from "../Calculation";

function App() {
 
    const defaultProducts = [
      {id: 1, title: 'велосипед', price: 45000, count: 1},
      {id: 2, title: 'ролики', price: 15000, count: 3},
      {id: 3, title: 'самокат', price: 17000, count: 3},
      {id: 4, title: 'скейт', price: 22000, count: 3},
      {id: 5, title: 'лыжи', price: 27000, count: 3},
    ];  

  const increment = value => {
    const target = basket.find(({id})=> id === value);
    target.count++;
    setBasket([...basket])   
  }

  const decrement = value => {
    const target = basket.find(({id})=> id === value);
    target.count--;

    if (target.count === 0) {
      setBasket(basket.filter(elem => elem !== target))
    }else {
    setBasket([...basket])
    }
    
  } 

const [basket, setBasket] = useState(defaultProducts);

return (
    <div>
      <div> 
        {    
          basket.map(item => 
          <BasketItem
            increment={increment}
            decrement={decrement}
            key = {item.id} 
            {...item}          
          />)
        }
     </div>
    <Calculation basket={basket}/>
    </div>
  );
}

export default App;

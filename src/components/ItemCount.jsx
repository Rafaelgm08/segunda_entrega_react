import { useState } from "react"

const ItemCount = ({Stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

const stock = 0

const increment = () => {
    if (quantity < stock) {
        return setQuantity(quantity+1)
    }
}

const decrement = () => {
    if (quantity > 1) {
        return setQuantity(quantity-1)
    }
} 
return (
    <div className='Counter'>
    <div className= 'Controls'>
         <button className='Button' onClick={decrement}>-</button>
         <h4 className='Number'>{quantity}</h4>
         <button className='Button' onClick={increment}></button>
    </div>
    <div>
        <button className="Button" onClick={() => onAdd(quantity)} disabled={!stock}></button>
    </div>
    </div>
        
)

}




import React from 'react'

const AddtoCart = ({cart}) => {
  return (
    <div>
        {
            cart.map((a) => {
                return (
                    <div id='card'>
                        <img src={a.image}  />
                        <p>{a.name}</p>
                        <p> Rating:{a.rating}</p>
                        <button onClick={()=> setCart([...cart,a])}>Add to Cart</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default AddtoCart
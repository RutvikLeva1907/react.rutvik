import React from 'react'

const List = ({title,description,thumbnail,category,price}) => {
  return (
   <div>
     <div  id='box' >
        
        <img src={thumbnail} alt={title} />
       <senter> <h2 className='title'>{title}</h2></senter>
        <p className='d'>{description}</p>
        <h3 className='cat'>category:{category}</h3>
        <h3 className='pri'>price:{price}</h3>
        <button className='btn'>By the Prodect</button>
    
    </div>
    </div>
  )
   
}

export default List
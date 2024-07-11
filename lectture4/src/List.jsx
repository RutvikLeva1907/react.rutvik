import React from 'react'

const List = ({title,description,thumbnail,category,price}) => {
  return (
   <div >
     <div id='box' >
        
        <img src={thumbnail} alt={title} />
        <h2>{title}</h2>
        {/* <p>{description}</p> */}
        <h3>category:{category}</h3>
        <h3>price:{price}</h3>
    
    </div>
    </div>
  )
   
}

export default List
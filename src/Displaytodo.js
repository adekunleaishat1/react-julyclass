import React from 'react'

const Displaytodo = ({alltodo}) => {
console.log(alltodo);
  return (
    <div>
      {alltodo.map((el, i)=>(
        <>
        <h2>{el}</h2>
        </>
      ))}
    </div>
  )
}

export default Displaytodo
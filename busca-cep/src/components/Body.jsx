import React from 'react'

const Body = ({ title, descrition, info, incentive}) => {
  return (
    <>
      <h2>{ title }</h2>
      <h4>{ descrition }</h4>
      <p>{ info }</p>
      <p>{ incentive }</p>
    </>
  )
}

export default Body

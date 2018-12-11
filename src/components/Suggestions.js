import React from 'react'

const Suggestions = (props) => {
  return (<ul>{ props.results.map(r=>(r.map(r=>(
    <li key={Math.random(10000000)}>
      {console.log(r)}
      {r}
    </li>
  ))))}</ul>)
}

export default Suggestions

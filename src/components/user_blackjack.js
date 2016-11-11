import React from 'react'

const UserBlackjack = (props) => {
  function collectListItems() {
    return props.cards.map(card => {return <li>{card.name}: {card.value}</li>})
  }
  return (
    <div>
      <h1>Player1</h1>
      <h2>Score: {props.score}</h2>
      <ul>
        {collectListItems()}
      </ul>
      <button onClick={props.hitMe()} className='hit-me'>hit me</button>
    </div>
  )
}

export default UserBlackjack
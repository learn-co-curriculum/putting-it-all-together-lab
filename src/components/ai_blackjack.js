import React from 'react'

const AIBlackJack = (props) => {
  function collectListItems() {
    return props.cards.map(card => {return <li>{card.name}: {card.value}</li>})
  }
  return (
    <div>
      <h1>Computer</h1>
      <h2>Score: {props.score}</h2>
      <ul>
        {collectListItems()}
      </ul>
    </div>
  )
}

export default AIBlackJack
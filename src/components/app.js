import React from 'react'
import UserBlackjack from './user_blackjack'
import AIBlackJack from './ai_blackjack'
import * as actions from '../actions/blackjack_actions'

class App extends React.Component {
  hitMe() {
    console.log('in APP HIT ME')
    console.log(this.props)
    this.props.store.dispatch(actions.setUserCards())
  }

  calculateAiScore() {
    return this.props.store.getState().aiCards.reduce((acc, card) => {return acc + card.value}, 0)
  }

  calculateUserScore() {
    debugger;
    return this.props.store.getState().userCards.reduce((acc, curr)=> {return acc + curr.value}, 0);
  }

  stay() {

  }
  render() {
    return (
      <div>
        "welcome to blackjack"
        <UserBlackjack 
          score={this.calculateUserScore()} 
          cards={this.props.store.getState().userCards}
          hitMe={this.hitMe.bind(this)}/>
        <AIBlackJack 
          score={this.calculateAiScore()}
          cards={this.props.store.getState().aiCards}/>
      </div>
    )
  }
}

export default App;
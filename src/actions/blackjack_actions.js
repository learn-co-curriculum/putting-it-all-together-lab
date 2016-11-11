export function fetchDeck() {
  return {type: 'FETCH_DECK'}
}

export function setAICards() {
  return {type: 'SET_AI_CARDS'}
}

export function setUserCards() {
  return {type: 'SET_USER_CARDS'}
}

export function resetGame() {
  return {type: 'RESET_GAME'}
}
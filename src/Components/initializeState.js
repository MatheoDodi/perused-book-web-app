export const initializeState = (res) => {
  return {
    currentlyReading : res.filter(book => book.shelf === 'currentlyReading'),
    wantToRead : res.filter(book => book.shelf === 'wantToRead'),
    read : res.filter(book => book.shelf === 'read')
  }
}
import { Row } from 'react-bootstrap'
import fantasy from '../data/history.json'
import SingleBook from './SingleBook'

const BookList = () => {
  return (
    <Row className="g-2">
      {fantasy.map((book) => {
        return (
            <SingleBook book={book}/>
        )
      })}
    </Row>
  )
}

export default BookList

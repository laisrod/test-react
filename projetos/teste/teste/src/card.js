import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './card.css';
import Carousel from './Carousel';

function Card(props) {
  let orderedCards;

  if (props.orderBy) {
    if (props.orderBy === 'lancamento') {
      orderedCards = props.cards.sort((a, b) => {
        if (a.launchDate <= b.launchDate) {
          return -1;
        } else if (a.launchDate >= b.launchDate) {
          return 1;
        }
        return 0;
      });
    } else if (props.orderBy === 'cronologia') {
      orderedCards = props.cards.sort((a, b) => {
        if (a.chronology <= b.chronology) {
          return -1;
        } else if (a.chronology >= b.chronology) {
          return 1;
        }
        return 0;
      });
    }
  } else {
    orderedCards = props.cards;
  }

  return (
    <Container id='root'>
      <Row>
        <Carousel cards={orderedCards} />
      </Row>
    </Container>
  );
}

export default Card;



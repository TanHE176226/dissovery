import {Card, Button} from 'react-bootstrap'
export const MyCard = (food) =>{
    return (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{food.cardData.Name}</Card.Title>
    <Card.Text>{food.cardData.Description}</Card.Text>
    <Button variant="primary">GO </Button>
  </Card.Body>
</Card>
    )
} 
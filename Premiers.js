import Carousel  from "react-bootstrap/Carousel";
import  Card  from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
function Premiers() {
  return (
   <div style={{marginBottom:"5%", background:"grey", padding:"5%"}}>
       <h2><b>Premiers</b></h2>
     <Carousel indicator={false}>
<Carousel.Item >
<CardGroup style={{display:"flex",gap:"30px", justifyContent:"space-around"}}>
  <Card>
    <Card.Img variant="top" src="https://www.sideshow.com/wp/wp-content/uploads/2018/10/Jaws-Poster-645x990.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.sideshow.com/wp/wp-content/uploads/2018/10/Alien-Poster-645x990.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
  
  </Card>
  <Card>
    <Card.Img variant="top" src="http://cdn30.us1.fansshare.com/image/famousmovies/titanic-poster-famous-movie-posters-1371628759.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>
    </Carousel.Item>
    <Carousel.Item >
<CardGroup style={{display:"flex",gap:"30px", justifyContent:"space-around"}}>
  <Card>
    <Card.Img variant="top" src="https://www.sideshow.com/wp/wp-content/uploads/2018/10/Evil-Dead-Poster-645x990.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.sideshow.com/wp/wp-content/uploads/2018/10/House-On-Haunted-Hill-Poster-645x990.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
  
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.sideshow.com/wp/wp-content/uploads/2018/10/Rosemarys-Baby-Poster-645x990.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>
    </Carousel.Item>
    </Carousel>

    </div>
      );
    }
    
export default Premiers;

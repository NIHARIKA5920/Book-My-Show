import Carousel  from "react-bootstrap/Carousel";
import  Card  from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
function CardSlider() {
  return (
   <div style={{marginBottom:"5%", background:"grey", padding:"5%"}}>
     <Carousel indicator={false}>
<Carousel.Item >
<CardGroup style={{display:"flex",gap:"30px", justifyContent:"space-around"}}>
    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
    <Card.Img src="https://img.buzzfeed.com/buzzfeed-static/static/2020-10/27/19/asset/878207caa966/sub-buzz-2548-1603828455-55.jpg" alt="Card image" style={{height:"300px",width:"300px"}} />
    <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
    </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
    <Card.Img src="https://www.indiewire.com/wp-content/uploads/2019/12/best-movie-posters-2019.png" alt="Card image" style={{height:"300px",width:"300px"}}/>
    <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
    </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
    <Card.Img src="https://img.buzzfeed.com/buzzfeed-static/static/2020-10/27/19/asset/f8aef0049ad6/sub-buzz-2583-1603828425-47.jpg" alt="Card image" style={{height:"300px",width:"300px"}} />
    <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
    </Card.ImgOverlay>
    </Card>
    </CardGroup>
    </Carousel.Item>
    <Carousel.Item >
<CardGroup style={{display:"flex",gap:"30px", justifyContent:"space-around"}}>
    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
    <Card.Img src="https://www.companyfolders.com/blog/media/2017/07/24-coolest-poster-designs-for-famous-movies.jpg" alt="Card image" style={{height:"300px",width:"300px"}} />
    <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
    </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
    <Card.Img src="https://www.freepik.com/blog/app/uploads/2017/05/02previa-13.jpg" alt="Card image" style={{height:"300px",width:"300px"}}/>
    <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
    </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
    <Card.Img src="https://airows.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTM2MDQ1MTg0NTA4MDMwOTQ2/a-movie-poster-a-day-requiem-printsjpg.webp" alt="Card image" style={{height:"300px",width:"300px"}} />
    <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
    </Card.ImgOverlay>
    </Card>
    </CardGroup>
    </Carousel.Item>
    </Carousel>


    
    </div>
      );
    }
    
export default CardSlider;

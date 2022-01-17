import Carousel  from "react-bootstrap/Carousel";

function SliderImages() {
  return (
   <div>
<Carousel style ={{height:"40%", width:"100%"}} fade variant="dark">
<Carousel.Item >
     <img 
     className="d-block w-100" 
     src="https://www.super-hobby.com/zdjecia/7/1/7/35263_rd.jpg" 
     alt=""
      />
     <Carousel.Caption>
       <h3>First slide label</h3>
       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img className="d-block w-100"
      src="https://viralscape.com/wp-content/uploads/2014/07/Movie-Posters-That-Look-Similar-1.jpg" 
      alt=""/>
     <Carousel.Caption>
       <h3>Second slide label</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img className="d-block w-100" 
     src="https://dc-cdn.s3-ap-southeast-1.amazonaws.com/dc-Cover-9jfjq6bb4tl2ge68hkgmhmbib6-20160628122339.original.jpeg" 
     alt=""/>
 
     <Carousel.Caption>
       <h3>Third slide label</h3>
       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
     </Carousel.Caption>
   </Carousel.Item>
 </Carousel>

</div>
      );
    }
    
export default SliderImages;

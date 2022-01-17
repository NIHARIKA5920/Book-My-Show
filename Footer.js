import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
    return (
      <div style={{background:"black",color:"white"}}>
      <Container fluid>
          <Row style={{padding:"3%"}}>
              <Col xs={{offset:1,span:2}}>
              col 1
              </Col>
              <Col xs={4}>
              col 2
              </Col>
              <Col xs={5} style={{display:"flex", flexDirection:"row-reverse"}}>
            <button style={{background:"rgb(236,94,113"}}>Conatact today</button>
              </Col>
          </Row>
          <Row style={{textAlign:"center",padding:"3%", background:"grey"}}>
          <Col>
              col 1
              </Col>
              <Col>
              col 2
              </Col>
              <Col>
              col 3
              </Col>
          </Row>
      </Container>
      </div>
    );
  }
  
  export default Footer;
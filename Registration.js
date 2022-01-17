import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import  Container from "react-bootstrap/Container";
import { useState } from "react";
function Registration() {
    const [emailaddress, setEmailAddress]=useState("");
    const [password, setPassword]=useState("");
    return (
        <div>
            <Container style={{padding:"10%"}}>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={emailaddress} onChange={(e)=> setEmailAddress(e.target.value)} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        </Container>
        </div>
    );
}
export default Registration;
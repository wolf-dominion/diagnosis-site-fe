import React from 'react'
import { Form, Button} from "react-bootstrap";

function ChangeUsernameForm(){
    return(
        <div>
            <Form>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Change password: {}</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )   
}

export default ChangeUsernameForm
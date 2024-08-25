import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Authcontex } from '../../Context/Context';


const Registration = () => {
    const {createuser}=useContext(Authcontex)
    const handleregistration=(event)=>{
        event.preventDefault();
        const Form=event.target;
        const name=Form.name.value;
        const email=Form.email.value;
        const password=Form.password.value;
        console.log(name,email,password)
        createuser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
        })
        .catch(error=>{
            console.error(error)
        })


    }
    return (
        <div>
            <Form className='m-5 'onSubmit={handleregistration} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter Your Email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Enter Your Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    LogIn
                </Button>
            </Form>
        </div>
    );
};

export default Registration;
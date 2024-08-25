import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';

import { Authcontex } from '../../Context/Context';
import { useLocation, useNavigate } from 'react-router-dom';

const Singin = () => {
    const {singinuser}=useContext(Authcontex)
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/'

    const handlelogin=(event)=>{
        event.preventDefault();
        const From=event.target;
        const email=From.email.value;
        const password=From.password.value;
        console.log(email,password)
        singinuser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            From.reset();
            navigate(from,{replace:true})
        })

    }
    return (
        <div>
            <Form className='m-5  ' onSubmit={handlelogin} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
              
                <Button variant="primary" type="submit">
                    LogIn
                </Button>
            </Form>
        </div>
    );
};

export default Singin;
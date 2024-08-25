import React from 'react';
import { Button, Card, Carousel, Container } from 'react-bootstrap';
import hotel1 from '../../Assets/Hotels/hotel 1.jpg'
import hotel2 from '../../Assets/Hotels/hotel 2.jpg'
import hotel3 from '../../Assets/Hotels/hotel 3.jpg'
import room1 from '../../Assets/Hotels/room 1.jpg'
import room2 from '../../Assets/Hotels/room 2.jpg'
import room3 from '../../Assets/Hotels/room 3.jpg'
import room4 from '../../Assets/Hotels/room 4.jpg'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <div className='mb-5'>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={hotel1} height='500px'
                            alt="First slide"
                            fluid
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className=" d-block w-100 "
                            src={hotel2} height='500px'
                            alt="Second slide"
                            fluid
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={hotel3} height='500px'
                            alt="Third slide"
                            fluid
                        />

                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <Container>
                    <div className="row">
                        <div className="col">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={room4} height='190px' />
                                <Card.Body>
                                    <Card.Title>Couple Room </Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Link to="/booking">
                                    <Button variant="primary">Booking</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={room1} height='190px' />
                                <Card.Body>
                                    <Card.Title>Family Room</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Link to="/booking">
                                    <Button variant="primary">Booking</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={room2} height='190px' />
                                <Card.Body>
                                    <Card.Title>Single Room</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Link to="/booking">
                                    <Button variant="primary">Booking</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={room3} height='190px' />
                                <Card.Body>
                                    <Card.Title>Special Singe Room</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Link to="/booking">
                                    <Button variant="primary">Booking</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Home;
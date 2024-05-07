import { Head } from '@inertiajs/react';
import Navigation from '@/Components/Navigation'; 
import { Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../images/background-spe2.jpg';
import ParallaxImage from '@/Components/ParallaxImage';
import MainContent from '@/Components/MainContent';
import { handleScroll } from '@/Utilities/scrollFunction';
import Footer from '@/Components/Footer';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="">
                <div className="">

                    <>
                        <div className="d-flex flex-column text-justify" id='home'>
                            <header>
                                <Navigation className='navbar' />
                            </header>
                            <div className='vh-100 bg-primary'>

                                <ParallaxImage backgroundImage={backgroundImage}>
                                    <Row>
                                        <Col xs={12} md={6} className="mb-3 text-center spe-heading fw-bold ">
                                            SINGLE PAIR ETHERNET
                                        </Col>

                                        <Col xs={12} md={6} className="d-flex flex-column">
                                            <Row className="mb-3 p-3 mt-5">
                                                <Col xs={12} className='text-justify'>
                                                    <span className='fw-bold text-primary'>Single Pair Ethernet</span> je komunikačný a prenosový štandard, ktorý umožňuje prenos dát prostredníctvom jediného páru medených vodičov.
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12} className="text-center">
                                                    <Button onClick={() => handleScroll('spe')}>Dozvedieť sa viac!</Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </ParallaxImage>
                                <MainContent></MainContent>
                                <Footer></Footer>

                            </div>
                        </div>
                    </>
                </div>
            </div>
        </>
    );
}

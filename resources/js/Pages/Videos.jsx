import { useForm, usePage } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '@/Components/Navigation';
import YoutubePlayer from '@/Components/YoutubePlayer';

export default function Videos() {
    const [videos, setVideos] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const { auth } = usePage().props;
    const { data, setData, post, reset } = useForm({
        link: '',
        name: '',
    });

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        try {
            const response = await fetch('/api/videos');
            if (!response.ok) {
                throw new Error('Failed to fetch videos');
            }
            const data = await response.json();
            const processedVideos = data.map((video) => ({
                id: video.id,
                videoId: video.link,
                name: video.name
            }));
            setVideos(processedVideos);
        } catch (error) {
            console.error(error);
        }
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            await post('/videos');
            fetchVideos();
            setShowForm(false);
            reset('link', 'name');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <header>
                <Navigation className='navbar' />
            </header>
            {auth.user && auth.user.admin && (
                <Container fluid className="mt-5 mb-3">
                    <Button variant="dark w-100 mt-3" onClick={() => setShowForm(prevState => !prevState)}>
                        {showForm ? "Skryť formulár" : "Pridať video"}
                    </Button>

                    {showForm && (
                        <Form onSubmit={submit} className='pt-3'>
                            <Form.Group className="mb-3" controlId="formLink">
                                <Form.Label>Link</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Vlož link YouTube videa"
                                    value={data.link}
                                    onChange={(e) => setData('link', e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Názov</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Zadaj názov videa"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                            </Form.Group>
                            <Button variant="danger w-100" type="submit">
                                Potvrdiť
                            </Button>
                        </Form>
                    )}
                </Container>
            )}

            <Container fluid className=" mb-3">
                <Row xs={1} sm={1} md={2} lg={2} xl={2} className="g-4 mt-1">
                    {videos.map((video) => (
                        <Col key={video.id}>
                            <Card>
                                <Card.Body>
                                    <YoutubePlayer videoId={video.videoId} />
                                </Card.Body>
                                <Card.Footer>
                                    <h3 className='text-center'>{video.name}</h3>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}


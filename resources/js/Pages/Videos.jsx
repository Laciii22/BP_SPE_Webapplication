import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '@/Components/Navigation';
import { Container, Row, Col, Card } from 'react-bootstrap';
import YoutubePlayer from '@/Components/YoutubePlayer';

export default function Videos() {
    const [videos, setVideos] = useState([]);

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

    return (
        <div>
            <header>
                <Navigation className='navbar' />
            </header>
            <Container fluid className="mt-5">
                <Row xs={1} sm={1} md={2} lg={2} xl={2} className="g-4 mt-5">
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

import { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Card, Form, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '@/Components/Navigation';
import YoutubePlayer from '@/Components/YoutubePlayer';
import Notification from '@/Components/CustomNotification'; // Import komponenty Notification
import { usePage, useForm } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';


export default function Videos() {
    const [videos, setVideos] = useState(() => {
        const storedVideos = sessionStorage.getItem('videos');
        return storedVideos ? JSON.parse(storedVideos) : [];
    });
    const { auth } = usePage().props;
    const [deleteSuccess, setDeleteSuccess] = useState(false); // State pre sledovanie úspešného vymazania
    const { data, setData, post, reset } = useForm({
        link: '',
        name: '',
    });
    const [editData, setEditData] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchVideos();
    }, []);

    const handleCloseModal = () => {
        setShowModal(false);
        setEditData(null);
        reset('link', 'name');
    };

    const handleShowModal = () => setShowModal(true);

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
            sessionStorage.setItem('videos', JSON.stringify(processedVideos));
        } catch (error) {
            console.error(error);
        }
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            if (editData) {
                await Inertia.patch(`/videos/${editData.id}`, data);
            } else {
                await post('/videos');
            }
            fetchVideos();
            handleCloseModal();
        } catch (error) {
            console.error(error);
        }
    };


    const deleteVideo = async (id) => {
        try {
            await fetch(`/api/videos/${id}`, {
                method: 'DELETE',
            });
            fetchVideos();
            setDeleteSuccess(true);
        } catch (error) {
            console.error(error);
            alert('Error deleting video');
        }
    };

    const handleEdit = (video) => {
        setEditData(video);
        setData({ 'link': video.videoId, 'name': video.name });
        handleShowModal();
    };

    return (
        <div>
            <header>
                <Navigation className='navbar' />
            </header>
            <Notification show={deleteSuccess} onClose={() => setDeleteSuccess(false)} variant="success" message="Video was successfully deleted." />

            {auth.user && auth.user.admin && (
                <Container fluid className="mt-5 d-flex justify-content-center align-items-center">
                    <Button variant="dark mt-3 w-100" onClick={handleShowModal}>
                        Pridať video
                    </Button>

                    <Modal show={showModal} onHide={handleCloseModal} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>{editData ? "Upraviť video" : "Pridať video"}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={submit}>
                                <Form.Group controlId="formLink">
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
                                <Button variant="danger" type="submit">
                                    {editData ? "Uložiť zmeny" : "Potvrdiť"}
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Modal>
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
                                    {auth.user && auth.user.admin && (
                                        <div className='d-flex'>
                                            <Button className='w-50 mx-1' variant="warning" onClick={() => handleEdit(video)}>Edit</Button>
                                            <Button className='w-50 mx-1' variant="dark" onClick={() => deleteVideo(video.id)}>Delete</Button>
                                        </div>
                                    )}
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Card, Form, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '@/Components/Navigation';
import YoutubePlayer from '@/Components/YoutubePlayer';
import Notification from '@/Components/CustomNotification'; 
import { usePage, useForm } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import ConfirmationModal from '@/Components/ConfirmationModal'; 

export default function Videos() {
    const [videos, setVideos] = useState(() => {
        const storedVideos = sessionStorage.getItem('videos');
        return storedVideos ? JSON.parse(storedVideos) : [];
    });
    const { auth } = usePage().props;
    const [deleteSuccess, setDeleteSuccess] = useState(false); 
    const { data, setData, post, reset } = useForm({
        link: '',
        name: '',
    });
    const [editData, setEditData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedVideoId, setSelectedVideoId] = useState(null); 
    const [showDeleteModal, setShowDeleteModal] = useState(false); 

    useEffect(() => {
        fetchVideos();
    }, []);

    const handleCloseModal = () => {
        setShowModal(false);
        setEditData(null);
        reset('link', 'name');
    };

    const handleShowModal = () => setShowModal(true);

    const handleDeleteModalClose = () => setShowDeleteModal(false);

    const handleDeleteModalConfirm = async () => {
        await deleteVideo(selectedVideoId);
        setShowDeleteModal(false); // Close delete confirmation modal after deletion
    };

    const fetchVideos = () => {
        fetch('/api/videos')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch videos');
                }
                return response.json();
            })
            .then(data => {
                const processedVideos = data.map(video => ({
                    id: video.id,
                    videoId: video.link,
                    name: video.name
                }));
                setVideos(processedVideos);
                sessionStorage.setItem('videos', JSON.stringify(processedVideos));
            })
            .catch(error => {
                console.error(error);
            });
    };
    
    const submit = async (e) => {
        e.preventDefault();
        try {
            if (editData) {
                console.log(editData.id);
                const response = await fetch(`/api/videos/${editData.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                if (!response.ok) {
                    throw new Error('Failed to update video');
                }
            } else {
                const response = await fetch('/api/videos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                if (!response.ok) {
                    throw new Error('Failed to create video');
                }
            }
            handleCloseModal();
            fetchVideos();

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
    

    const handleDelete = (videoId) => {
        setSelectedVideoId(videoId); // Set the selected video ID for deletion
        setShowDeleteModal(true); // Open delete confirmation modal
    };

    return (
        <div>
            <header>
                <Navigation className='navbar' />
            </header>
            <Notification show={deleteSuccess} onClose={() => setDeleteSuccess(false)} variant="success" message="Video was successfully deleted." />

            {auth.user && auth.user.admin && (
                <Container fluid className="mt-5 d-flex justify-content-center align-items-center" >
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

                    {/* Delete Confirmation Modal */}
                    <ConfirmationModal
                        show={showDeleteModal}
                        handleClose={handleDeleteModalClose}
                        handleConfirm={handleDeleteModalConfirm}
                        message="Ste si istý, že chcete vymazať toto video?"
                    />
                </Container>
            )}

            <Container fluid className=" mb-3 " style={{ marginTop: '5rem' }}>
                <Row xs={1} sm={1} md={2} lg={2} xl={2} className="g-4 mt-1">
                    {videos.map((video) => (
                        <Col key={video.id}>
                            <Card>
                                <Card.Body>
                                    <YoutubePlayer videoId={video.videoId} />
                                </Card.Body>
                                <Card.Footer>
                                    <h3 className='text-center'>{video.name}</h3>
                                    {auth.user && auth.user.admin === 1 &&  (
                                        <div className='d-flex'>
                                            <Button className='w-50 mx-1' variant="warning" onClick={() => handleEdit(video)}>Upraviť</Button>
                                            <Button className='w-50 mx-1' variant="dark" onClick={() => handleDelete(video.id)}>Vymazať</Button>
                                        </div>
                                    )}
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
}

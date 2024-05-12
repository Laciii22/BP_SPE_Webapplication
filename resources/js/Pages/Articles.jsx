import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Article from '@/Components/Article';
import Navigation from '@/Components/Navigation';
import Footer from '@/Components/Footer';
import { usePage } from '@inertiajs/react';
import ConfirmationModal from '@/Components/ConfirmationModal';
import { Head } from '@inertiajs/react';
import CustomNotification from '@/Components/CustomNotification';


export default function Videos() {
    const { auth } = usePage().props;
    const [articles, setArticles] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [newArticle, setNewArticle] = useState({ title: '', content: '', source: '' });
    const [showModal, setShowModal] = useState(false);
    const [editArticle, setEditArticle] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editedArticle, setEditedArticle] = useState({ title: '', content: '', source: '' });
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [notification, setNotification] = useState({
        show: false,
        type: '',
        message: ''
    });

    const handleEditInputChange = (e) => {
        const { name, value } = e.target;
        setEditedArticle(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDeleteModalClose = () => setShowDeleteModal(false);

    const handleDeleteModalConfirm = async () => {
        await deleteArticle(selectedArticle.id);
        setShowDeleteModal(false); // Close delete confirmation modal after deletion
    };

    const handleEdit = (article) => {
        setEditArticle(article);
        const editedData = {
            title: article.title,
            content: article.content,
            source: article.source !== null ? article.source : ''
        };
        setEditedArticle(editedData);
        setShowEditModal(true);
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            const editedData = {
                title: editedArticle.title,
                content: editedArticle.content,
                source: editedArticle.source !== '' ? editedArticle.source : null
            };

            const response = await fetch(`/api/articles/${editArticle.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editedData)
            });
            if (!response.ok) {
                throw new Error('Failed to update article');
            }
            const updatedArticle = await response.json();
            setArticles(prevArticles =>
                prevArticles.map(article =>
                    article.id === updatedArticle.id ? updatedArticle : article
                )
            );
            setShowEditModal(false);
            fetchArticles();
            setNotification({
                show: true,
                type: 'success',
                message: 'Článok bol úspešne upravený'
            });
        } catch (error) {
            console.error('Error updating article:', error);
            setNotification({
                show: true,
                type: 'error',
                message: 'Článok sa nepodarilo upraviť.'
            });
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const response = await fetch('/api/articles');
            if (!response.ok) {
                throw new Error('Failed to fetch articles');
            }
            const data = await response.json();
            setArticles(data);
            if (data.length > 0) {
                setSelectedArticle(data[0]);
            }
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };

    const handleArticleClick = (article) => {
        setSelectedArticle(article);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewArticle(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newArticle)
            });
            if (!response.ok) {
                throw new Error('Failed to create article');
            }
            const data = await response.json();
            setArticles(prevState => ([...prevState, data]));
            setNewArticle({ title: '', content: '', source: '' });
            setShowModal(false);
            setNotification({
                show: true,
                type: 'success',
                message: 'Článok bol vytvorený úspešne.'
            });
        } catch (error) {
            console.error('Error creating article:', error);
            setNotification({
                show: true,
                type: 'error',
                message: 'Článok sa nepodarilo vytvoriť.'
            });
        }
    };

    const handleDelete = (articleId) => {
        setSelectedArticle(articleId);
        setShowDeleteModal(true);
    };

    const deleteArticle = async (articleId) => {
        try {
            const response = await fetch(`/api/articles/${articleId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete article');
            }
            setArticles(prevArticles => prevArticles.filter(article => article.id !== articleId));
            if (selectedArticle && selectedArticle.id === articleId) {
                setSelectedArticle(null);
            }
            setShowDeleteModal(false);
            setNotification({
                show: true,
                type: 'success',
                message: 'Článok bol úspešne vymazaný.'
            });
        } catch (error) {
            console.error('Error deleting article:', error);
            setNotification({
                show: true,
                type: 'error',
                message: 'Článok sa nepodarilo vymazať.'
            });
        }
    };

    return (
        <div>
            <Head title="Articles" />
            <div className="container min-vh-100" style={{ marginTop: '5rem' }}>
                <header>
                    <Navigation />
                </header>

                <CustomNotification
                    show={notification.show}
                    onClose={() => setNotification({ ...notification, show: false })}
                    variant={notification.type}
                    message={notification.message}
                />

                <div className="row">
                    {/* Left column with all articles */}
                    <div className="col-lg-3 col-md-4 col-sm-5  sm-md-0 text-center" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                        <div className="list-group">
                            {articles.map(article => (
                                <button
                                    key={article.id}
                                    type="button"
                                    className={`list-group-item list-group-item-action ${selectedArticle && selectedArticle.id === article.id ? 'active' : ''}`}
                                    onClick={() => handleArticleClick(article)}
                                >
                                    {article.title}
                                    {auth.user && auth.user.admin === 1 && (
                                        <div className="d-flex flex-nowrap justify-center">
                                            <a href="#" className="btn btn-warning btn-sm mx-1" onClick={() => handleEdit(article)}>Upraviť</a>
                                            <a href="#" className="btn btn-danger btn-sm mx-1" onClick={() => handleDelete(article.id)}>Vymazať</a>
                                        </div>
                                    )}

                                </button>
                            ))}
                        </div>
                        {auth.user && auth.user.admin === 1 && (
                            <Button variant="primary" className='w-100 mt-2' onClick={() => setShowModal(true)}>Vytvoriť nový článok</Button>
                        )}

                    </div>

                    {/* Right column with the selected article */}
                    <div className="col-lg-9 col-md-8 col-sm-7 bg-light rounded ">
                        {selectedArticle && (
                            <Article
                                title={selectedArticle.title}
                                text={selectedArticle.content}
                                source={selectedArticle.source}
                            />
                        )}
                    </div>
                </div>
            </div>
            <Footer />
            {/* Modal for creating new articles */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Vytvoriť nový článok</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Názov</label>
                            <input type="text" className="form-control" id="title" name="title" value={newArticle.title} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="content" className="form-label">Obsah</label>
                            <textarea className="form-control" id="content" name="content" value={newArticle.content} onChange={handleInputChange}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="source" className="form-label">Zdroj</label>
                            <input type="text" className="form-control" id="source" name="source" value={newArticle.source} onChange={handleInputChange} />
                        </div>
                        <Button variant="primary" type="submit" disabled={!newArticle.title || !newArticle.content}>
                            Vytvoriť článok
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>

            <Modal show={showEditModal && editArticle} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Upraviť článok</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleEditSubmit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Názov</label>
                            <input type="text" className="form-control" id="title" name="title" value={editedArticle.title} onChange={handleEditInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="content" className="form-label">Obsah</label>
                            <textarea className="form-control" id="content" name="content" value={editedArticle.content} onChange={handleEditInputChange}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="source" className="form-label">Zdroj</label>
                            <input type="text" className="form-control" id="source" name="source" value={editedArticle.source} onChange={handleEditInputChange} />
                        </div>
                        <Button variant="primary" type="submit" disabled={!editedArticle.title || !editedArticle.content}>
                            Uložiť zmeny
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>

            {/* Delete Confirmation Modal */}
            <ConfirmationModal
                show={showDeleteModal}
                handleClose={handleDeleteModalClose}
                handleConfirm={handleDeleteModalConfirm}
                message="Ste si istý, že chcete vymazať tento článok?"
            />




        </div>
    );
};


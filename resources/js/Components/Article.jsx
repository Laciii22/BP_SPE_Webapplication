import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Article = ({ title, text, source }) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h2 className="mb-4">{title}</h2>
                        <p className="text-justify ms-4">{text}</p>
                        {source && (
                            <p className="mt-3 text-end">Source: <a href={source}
                             target="_blank" rel="noopener noreferrer">{source}</a></p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;

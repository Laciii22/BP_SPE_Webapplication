import React from 'react';

const YoutubePlayer = ({ videoId }) => {
    return (
        <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', height: 0, overflow: 'hidden' }}>
            <iframe
                title="Youtube Video Player"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                sandbox="allow-same-origin allow-scripts"
            ></iframe>
        </div>
    );
};

export default YoutubePlayer;

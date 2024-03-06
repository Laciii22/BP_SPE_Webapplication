import React from 'react';

const YoutubePlayer = ({ videoId }) => {
    // Regular expression to match different YouTube URL formats
    const youtubeRegEx = /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    // Function to extract video ID from the URL
    const extractVideoId = (url) => {
        const match = url.match(youtubeRegEx);
        return match && match[1];
    };

    // Function to generate embed URL
    const generateEmbedUrl = (videoId) => {
        return `https://www.youtube.com/embed/${videoId}`;
    };

    // Extract video ID from the given URL
    const extractedVideoId = extractVideoId(videoId);

    // Generate embed URL
    const embedUrl = generateEmbedUrl(extractedVideoId);

    return (
        <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', height: 0, overflow: 'hidden' }}>
            <iframe
                title="Youtube Video Player"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src={embedUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default YoutubePlayer;

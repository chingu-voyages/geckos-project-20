import React, { useState, useEffect } from 'react';
import './background.styles.scss';
import { getBackground } from '../../../../services/api';

function Background() {
    const [backgroundImage, setBackgroundImage] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    async function fetchImage() {
        try {
            const backgroundImage = await getBackground();
            setBackgroundImage(backgroundImage.url);
        } catch (error) {
            setError(error);
        }
    }

    useEffect(() => {
        fetchImage();
        setIsLoaded(true);
    }, []);

    const backgroundStyle = {
        backgroundImage: 'url(' + backgroundImage + ')',
        color: 'red',
    };

    return error ? (
        <div>{error.message}</div>
    ) : isLoaded ? (
        <div className="background">
            <div className="background-image" style={backgroundStyle} />
            <div className="background-overlay" />
        </div>
    ) : (
        <p>Loading ...</p>
    );
}

export default Background;

import React, { useState, useEffect } from 'react';
import './quote.styles.scss';
import { getQuote } from '../../../../services/api';
import iconHeartEmpty from './../../../../images/icon-heart-empty.svg';
import iconHeart from './../../../../images/icon-heart.svg';
import { FaTwitter } from 'react-icons/fa';

function Quote() {
    const [isLoading, setIsLoading] = useState(true);
    const [quote, setQuote] = useState({});
    const [error, setError] = useState(null);

    // fetch Quote from an API
    useEffect(() => {
        (async function() {
            try {
                const response = await getQuote();
                const data = await response.json();
                setQuote(data.contents.quotes[0]);
                setIsLoading(false);
            } catch (error) {
                setError(error);
            }
        })();
    }, []);

    const heart = () => {
        const controlHeart = document.querySelector('.control-hearth');
        controlHeart.classList.toggle('active');
    };

    if (error) {
        return <p>{error.message}</p>;
    }

    if (isLoading) {
        return <p>Loading ...</p>;
    } else {
        return (
            <div className="app-quote">
                <div className="app-quote-body">
                    <div className="app-quote-body__text">"{quote.quote}"</div>
                    <div className="app-quote-body__source">
                        <div className="app-quote-body__source-content">
                            <span className="app-quote-body__source-content__author">{quote.author}</span>
                            <span className="control control-hearth" onClick={heart}>
                                <img src={iconHeartEmpty} alt="icon heart empty" className="icon icon-heart-empty" />
                                <img src={iconHeart} alt="icon heart" className="icon icon-heart" />
                            </span>
                            <span className="control control-twitter">
                                <a
                                    href={`https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaTwitter />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Quote;

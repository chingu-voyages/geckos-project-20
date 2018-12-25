import React, { Component } from "react";
import './styles.scss';
import { getQuote } from "../../../../services/api";
import iconHeartEmpty from './../../../../images/icon-heart-empty.svg';
import iconHeart from './../../../../images/icon-heart.svg';
// import { FaTwitter } from 'react-icons/fa';

class Quote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quote: {},
            isLoading: true
        };
    }

    async componentDidMount() {
        try {
            const response = await getQuote();
            const data = await response.json();
            this.setState({ quote: data, isLoading: false });
            // console.log(data);
        } catch (error) {
            this.setState({ error: error });
        }
    }

    heart() {
        const controlHeart = document.querySelector('.control-hearth');
        controlHeart.classList.toggle('active');
    }

    render() {
        const { quote, error, isLoading } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        } else {
            return (
                <div className="bottom">
                    <div className="app-quote">
                        <div className="app-quote-body">
                            <div className="app-quote-body__text">
                                {quote.quote}
                            </div>
                            <div className="app-quote-body__source">
                                <div className="app-quote-body__source-content">
                                    <span className="app-quote-body__source-content__author">{quote.author}</span>
                                    <span className="control control-hearth" onClick={this.heart}>
                                        <img src={iconHeartEmpty} alt="icon heart empty" className="icon icon-heart-empty" />
                                        <img src={iconHeart} alt="icon heart" className="icon icon-heart" />
                                    </span>
                                    <span className="control control-twitter">
                                        <a
                                            href={`https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {/* <FaTwitter /> */}
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Quote;

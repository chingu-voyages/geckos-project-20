import React, { Component } from "react";
import './styles.scss';
import { getQuote } from "../../../../services/api";

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
      console.log(data);
    } catch (error) {
      this.setState({ error: error });
    }
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
                <span className="app-quote__text-source__author">{quote.author}</span>
              </div>    
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Quote;

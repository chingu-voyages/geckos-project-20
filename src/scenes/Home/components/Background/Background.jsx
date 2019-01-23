import React, { Component } from "react";
import './styles.scss';
import { getBackground } from "../../../../services/api";

class Background extends Component {
    constructor(props) {
        super(props);

        this.state = {
            background: {},
            isLoading: true
        };
    }

  async componentDidMount() {
    try {
      const image = await getBackground();
      this.setState({ background: image.url, isLoading: false });
    } catch (error) {
      this.setState({ error: error });
    }
    }

    render() {
        const { background, error, isLoading } = this.state;
        const backgroundStyle = {
            backgroundImage: 'url(' + this.state.background + ')',
          };

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        } else {
            return (
                <div class="background" >
                    <div className="background-image" style={backgroundStyle}></div>
                    <div className="background-overlay"></div>
                </div>
            );
        }
    }
}

export default Background;

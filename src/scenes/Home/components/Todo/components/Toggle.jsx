import React, { Component } from 'react';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            open: true
         };
    }
    clickHandler = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }
    render() {
        return (
            <div style={{ position: 'absolute', right: '-250px', zIndex: 5, backgroundColor: 'red' }}>
                
                { this.props.name==='chevron' ?

                    <i className="fa fa-chevron-down" 
                    style={{width:'100%',display:'block'}}
                    onClick={this.clickHandler}></i>
                    :
                    <div onClick={this.clickHandler}>
                        {this.props.name}
                    </div> 
                }

            { this.state.open ? 
                 this.props.children : null
            }
           
            {console.log(this.props.children)}
            </div>
        );
    }
}

export default Toggle;
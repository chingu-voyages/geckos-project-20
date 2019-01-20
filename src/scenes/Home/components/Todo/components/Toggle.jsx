import React, { Component } from 'react';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isOpen: false,
            ref : null
        };
         
    }
    clickHandler = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
        }))
        
    }
    render() {
        const iterratorFunction = child => {
            return React.cloneElement(child,{
                onClick: this.clickHandler,
            })
        }
        let children = React.Children.map(this.props.children, iterratorFunction);
        const {isOpen} = this.state;
        return (
           <div style={{zIndex:50}} >

                { children[0] }
                
                { isOpen ? children[1] : null }

           </div>
        );
    }
}

export default Toggle;
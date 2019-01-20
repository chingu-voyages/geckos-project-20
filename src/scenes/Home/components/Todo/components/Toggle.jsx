import React, { Component } from 'react';
import { ToggleWrapper } from './StyledComponents';
import '../todo.styles.scss';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isOpen: false,
        };
    }

    clickHandler = () => {
        if (!this.state.isOpen) {
            // attach/remove event handler
            document.addEventListener('click', this.handleOutsideClick, false);
          } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
          }

        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
        }));
    }

    handleOutsideClick = (e) => {
        // ignore clicks on the component itself
        if (this.node.contains(e.target)) {
          return;
        }
        this.clickHandler();
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
            <ToggleWrapper ref={node => this.node = node }>
                { children[0] }
                
                { isOpen ? children[1] : null }
            </ToggleWrapper>
        );
    }
}

export default Toggle;
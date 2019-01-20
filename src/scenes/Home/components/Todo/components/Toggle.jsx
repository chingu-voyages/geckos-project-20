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

    iterratorFunction = (child, cchildren) => {
        console.log('dete ' ,child);
        return React.cloneElement(child,{
            ...child.props,
            ...cchildren
        })
    }

    iterratorFunction2 = (child) => {
        console.log('dete ' ,child);
       if(child.props.ignore){
           return React.cloneElement(child, {
           })
       } else {
           return React.cloneElement(child, {
               onClick: this.clickHandler
           })
       }
    }

    recursiveCloneChildren(children) {
        return React.Children.map(children, child => {

          if(!React.isValidElement(child)) {
              console.count('It Got here');
              return child;

          }

          var childProps = {};
          childProps.children = React.Children.map(child.props.children, this.iterratorFunction2);
          return this.iterratorFunction(child, childProps);
        })
      }

    render() {
      
        let children = React.Children.map(this.props.children, this.iterratorFunction2);
        // let children = this.recursiveCloneChildren(this.props.children);
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
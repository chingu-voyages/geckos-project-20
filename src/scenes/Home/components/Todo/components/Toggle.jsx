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

      returnFirstLevelWithModifiedChildren = (child, cchildren, applyOnThis) => {
        // console.log('Props: ',child.props);
        // console.log('dete ' ,child);
        return applyOnThis ? 
         React.cloneElement(child,{
            onClick: this.clickHandler,
            ...cchildren
        }) 
        :
        React.cloneElement(child,{
            ...cchildren
        })
    }

    applyClickToChild = (child) => {
        // console.log('Props2: ',child.props);
        // console.log('dete ' ,child);
       if(child.props.ignore){
           return React.cloneElement(child, {
               ...child.props,
               onClick: ()=>{
                    child.props.changeList && child.props.changeList(child.props.listOption);
                    
               }
           })
       } else {
           return React.cloneElement(child, {
            ...child.prop,
               onClick: () => {
                    child.props.changeList && child.props.changeList(child.props.listOption);
                    this.clickHandler();
               }
           })
       }
    }

    secondLevelCloneChildren(children) {
        return React.Children.map(children, (child,index) => {
          if(!React.isValidElement(child)) {
              return child;
          }
          
          // This if serves to apply the onClick to the ToggleActivator only, and not it's child
          // If the child also has the function, then it will close then open super fast and it
          // would feel like it wasn't even clicked
          if (index === 0){
            return this.returnFirstLevelWithModifiedChildren(child, childProps, true);
          } else {
            var childProps = {...child.props};
            childProps.children = React.Children.map(child.props.children, this.applyClickToChild);
            return this.returnFirstLevelWithModifiedChildren(child, childProps, false);
          }
        })
      }

    render() {
      
        // let children = React.Children.map(this.props.children, this.iterratorFunction2);
        let children = this.secondLevelCloneChildren(this.props.children);

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
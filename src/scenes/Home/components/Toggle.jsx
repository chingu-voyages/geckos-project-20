import React, { Component } from 'react';
import { ToggleWrapper } from './HomeStyledComponents';
// import '../todo.styles.scss';

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
    };

    handleOutsideClick = e => {
        if (!this.node === null) {
            // ignore clicks on the component itself
            if (this.node.current.contains(e.target)) {
                return;
            }
            // only executes if the ref node is not null and it's not itself

            // if it is null then it means that the task got deleted and we don't
            // have to call this.clickHandler at all since it changes state of the tas
            // and if the task is deleted then we don't have a state to change at all :)
            this.clickHandler();
        }
    };

    returnFirstLevelWithModifiedChildren = (child, cchildren, applyOnThis) => {
        return applyOnThis
            ? React.cloneElement(child, {
                  onClick: this.clickHandler,
                  ...cchildren,
              })
            : React.cloneElement(child, {
                  ...cchildren,
              });
    };

    applyClickToChild = child => {
        if (child.props.ignore) {
            return React.cloneElement(child, {
                ...child.props,
                onClick: () => {
                    child.props.changeList && child.props.changeList(child.props.listOption);
                    child.props.changeEditMode && child.props.changeEditMode();
                    child.props.deleteTask && child.props.deleteTask();
                },
            });
        } else {
            return React.cloneElement(child, {
                ...child.prop,
                onClick: () => {
                    child.props.changeList && child.props.changeList(child.props.listOption);
                    child.props.changeEditMode && child.props.changeEditMode();
                    child.props.deleteTask && child.props.deleteTask();
                    this.clickHandler();
                },
            });
        }
    };

    secondLevelCloneChildren(children) {
        return React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) {
                return child;
            }

            // This if serves to apply the onClick to the ToggleActivator only, and not it's child
            // If the child also has the function, then it will close then open super fast and it
            // would feel like it wasn't even clicked
            if (index === 0) {
                return this.returnFirstLevelWithModifiedChildren(child, childProps, true);
            } else {
                var childProps = { ...child.props };
                childProps.children = React.Children.map(child.props.children, this.applyClickToChild);
                return this.returnFirstLevelWithModifiedChildren(child, childProps, false);
            }
        });
    }

    render() {
        // let children = React.Children.map(this.props.children, this.iterratorFunction2);
        let children = this.secondLevelCloneChildren(this.props.children);

        const { isOpen } = this.state;
        return (
            // the ref syntax is a shorthand way to make a ref
            // the long way would be to make a variable in the constructor > this.node=React.createRef()
            // and in componentDidMount to focus it > this.node.current.focus()
            // and you would also need to change bottom like so > ref={this.node}

            <ToggleWrapper ref={node => (this.node = node)}>
                {children[0]}

                {isOpen ? children[1] : null}
            </ToggleWrapper>
        );
    }
}

export default Toggle;

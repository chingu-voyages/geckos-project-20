import React, { useState } from 'react';
import { ToggleWrapper } from './home.scmp';
// import '../todo.styles.scss';

function Toggle(props) {
    const [isOpen, setIsOpen] = useState(false);

    const clickHandler = () => {
        if (!isOpen) {
            // attach/remove event handler
            document.addEventListener('click', handleOutsideClick, false);
        } else {
            document.removeEventListener('click', handleOutsideClick, false);
        }

        setIsOpen(!isOpen);
    };

    const handleOutsideClick = e => {
        if (!this.node === null) {
            // ignore clicks on the component itself
            if (this.node.current.contains(e.target)) {
                return;
            }
            // only executes if the ref node is not null and it's not itself

            // if it is null then it means that the task got deleted and we don't
            // have to call this.clickHandler at all since it changes state of the tas
            // and if the task is deleted then we don't have a state to change at all :)
            clickHandler();
        }
    };

    const returnFirstLevelWithModifiedChildren = (child, cchildren, applyOnThis) => {
        return applyOnThis
            ? React.cloneElement(child, {
                  onClick: clickHandler,
                  ...cchildren,
              })
            : React.cloneElement(child, {
                  ...cchildren,
              });
    };

    const applyClickToChild = child => {
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
                    clickHandler();
                },
            });
        }
    };

    const secondLevelCloneChildren = children => {
        return React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) {
                return child;
            }

            // This if serves to apply the onClick to the ToggleActivator only, and not it's child
            // If the child also has the function, then it will close then open super fast and it
            // would feel like it wasn't even clicked
            if (index === 0) {
                return returnFirstLevelWithModifiedChildren(child, childProps, true);
            } else {
                var childProps = { ...child.props };
                childProps.children = React.Children.map(child.props.children, applyClickToChild);
                return returnFirstLevelWithModifiedChildren(child, childProps, false);
            }
        });
    };

    // let children = React.Children.map(props.children, iterratorFunction2);
    let children = secondLevelCloneChildren(props.children);

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

export default Toggle;

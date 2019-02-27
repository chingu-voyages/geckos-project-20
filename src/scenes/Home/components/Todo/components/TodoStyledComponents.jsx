import styled from 'styled-components';

export const Todo = styled.div`
    height: 18px;
    display: grid;
    grid-template-columns: max-content auto max-content;
    z-index: 5;

    .fa {
        display: none;
    }
    &:hover {
        .fa {
            display: block;
        }
    }

    .done {
        color: #bababa;
        text-decoration: line-through;
    }
`;

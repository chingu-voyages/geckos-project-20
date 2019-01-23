import styled from 'styled-components';

export const template = styled.div`
`;

export const Wrapper = styled.div`
    height: 215px;
    width: 420px;
    background-color: rgba(0,0,0, 0.9);
    position: fixed;
    display: grid;
    grid-template-rows: 1fr 50px;
    grid-row-gap: 10px;
    top: 70px;
    right: 15px;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 18px;
    /* This is the little arrow top right corner */
    &::after{ 
        content: "";
        z-index: 200;
        position: absolute;
        right: 20px;
        top: -8px;
        width: 0; 
        height: 0; 
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid rgba(0,0,0, 0.9);
    }
`;

export const CurrentWeather = styled.div`
    border-bottom: 1px solid pink;
    display: grid;
    align-items: end;
    grid-template-rows: 50px 1fr;
    text-align: left;

    & > * {
        border: 1px solid red;
    }

    & > .temperature{
        max-height: 65px;
        & > *{
            height: 100%;
            padding: 0 2px;
            display: inline-block;
            margin-right: 5px;
            border: 1px solid greenyellow;
        }

        img{

        }

        #max-temp{

        }

        #min-temp{

        }
    }
`;

export const NameSearch = styled.div`
   
    display: grid;
    grid-template-rows: 1fr 1fr;
    & > * {
        border: 1px solid lightskyblue;
    }
`;

export const WeeklyWeather = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr); 
`;

export const Day = styled.div`
    display: inline-block;
    border-radius: 5px;
    border: 1px solid whitesmoke;
    line-height: 50px;
    text-align:center;

    &:hover{
        background-color: rgba(255, 255, 255, 0.6);
    }
`;
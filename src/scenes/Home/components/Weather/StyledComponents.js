import styled from 'styled-components';

export const template = styled.div`
`;

export const Wrapper = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
    height: 215px;
    width: 420px;
    background-color: rgba(0,0,0, 0.7);
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
    /* border-bottom: 1px solid pink; */
    display: grid;
    align-items: end;
    grid-template-rows: 50px 1fr;
    text-align: left;

    & > * {
        /* border: 1px solid red; */
    }

    & > .temperature{
        max-height: 65px;
        & > *{
            /* height: 100%; */
            padding: 0 2px;
            display: inline-block;
            margin-right: 5px;
            /* border: 1px solid greenyellow; */
        }

        img{

        }

        #max-temp{
            font-size: 60px;
            font-weight: 500;
        }

        #min-temp{
            font-size: 38px;
            font-weight: 400;
            color: rgb(255, 255 ,255, 0.6 );
        }
    }
`;

export const NameSearch = styled.div`

    
    height: 100%;
    display: grid;
    grid-template-rows: 1fr;
    & > * {
        /* border: 1px solid lightskyblue; */
    }

    .text{
        width: fit-content;    
        span{
            cursor: pointer;
        }
        i{  
            cursor: pointer;
            display:none;
            font-size:13px;
            color: lightgray;
            float: right;

            &:hover{
                color: whitesmoke;
            }
        }

        &:hover{
            i {
                display: inline;
            }
        }
    }

    .new-city{
        input{
            font-size: 19px;
            color: lightgray;
            border: none;
            border-bottom: 2px solid gray;
            outline: none;
            height: 33px;
            width: 93%;
            background-color: transparent;

            &:focus{
                border-bottom: 2px solid lightgray;
            }
        }
        span{
            position: relative;

            .fa-crosshairs{
                position: absolute;
                top: 0;
                right: 30px;
            }
        }

        i{
            color: lightgray;
            display: inline;
            font-size: 18px;
            font-weight: 100;
            margin-left: 10px;
            text-align: center;

            &:hover{
                color: whitesmoke;
            }
        }
    }
`;

export const WeeklyWeather = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr); 
`;

export const Day = styled.div`
    display: grid;
    border-radius: 5px;
    /* border: 1px solid whitesmoke; */
    grid-template-rows: max-content 1fr;
    grid-template-columns:repeat(3, minmax(20px, 1fr));
    padding: 0 1px;
    align-items: center;
    grid-row-gap: 4px;
    font-size: 10px;

    img{
            height: 25px;
            width: 25px;
        }
    .day{
        grid-column: 1 / -1;
        background-color: red;
        text-align:center;
        padding: 2px 0;
    }   
    
    #min-temp{
        text-align: left;
        padding-left: 5px;
        color: rgb(255, 255 ,255, 0.6 );
    }
    

    &:hover{
        background-color: rgba(255, 255, 255, 0.1);
    }
`;
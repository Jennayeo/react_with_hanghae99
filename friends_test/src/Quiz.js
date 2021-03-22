import React from 'react';
import styled from 'styled-components';
import img from "./jiyoung.png";
import TinderCard from "react-tinder-card";

const Quiz = (props) => {
    console.log(props);
    const [num, setNum] = React.useState(0);

    const onSwipe = (direction) => {
        console.log("You swiped: " + direction);
        setNum(num+1);
    };
    return (
        <QuizContainer>
            <p><span>{num+1}번문제</span></p>
            {props.list.map((l,idx) => {
                if(num ===idx){
                    return <Question key={idx}>{l.question}</Question>;
                }
            })}

            <AnswerZone>
                <Answer>o</Answer>
                <Answer>x</Answer>
            </AnswerZone>
        
        {props.list.map((l, idx) => {
            if(idx === num){
                return (
                <DragItem key={idx}>
                    <TinderCard onSwipe={onSwipe}>
                        <img src={img} />
                    </TinderCard>
                   </DragItem>
            );
        }})}
    </QuizContainer>
    );
};

const QuizContainer = styled.div`
text-align: center;
    & > p > span {
        padding: 8px 16px;
        background-color: #fef5d4;
        border-radius: 30px;
    }
`;

const Question = styled.h1 `
    font-size: 1.5em;
`

const AnswerZone = styled.div`
width: 100vw;
height: 100vh;
width: 100%;
display: flex;
position: absolute;
top: 0;
left: 0;
z-index: 1;
`;

const Answer = styled.div`
width: 50%;
display: flex;
justify-content: center;
align-items: center;
font-size: 10em;
font-weight: 600;
color: #dadafc77;
`;

const DragItem = styled.div`
    postion: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    & > div {
        background-color: #ffd6aa;
        border-radius: 150px;
    }
    & img{
        max-width: 150px;
    }
    `;

export default Quiz;


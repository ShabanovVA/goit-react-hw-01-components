import styled from "styled-components";

export const Wrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 300px;
margin: 10px;
border: 1px black solid;
border-radius:5px;
`;

export const Title = styled.h2`
width: 100%;
text-align:center;
padding: 10px 0;
border-bottom:1px black solid;
`;

export const StatisticList = styled.ul`
display: flex;
`;
export const StatisticItem = styled.li`
display: flex;
width: 60px; 
flex-direction: column;
align-items: center;
padding: 10px 0;
`;

export const Label = styled.span`
font-weight: 400;
font-size: 18px;
`;

export const Percentage = styled.span`
margin-top:5px;
font-weight: 600;
font-size: 20px;
`;


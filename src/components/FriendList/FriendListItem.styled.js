import styled from "styled-components";

export const Wrapper = styled.li`
display: flex;
gap:15px;
align-items: center;
width: 250px;
margin: 10px;
border: 1px black solid;
border-radius:5px;
`;

export const Status = styled.span`
margin-left: 10px;
width: 15px;
height:15px;
border-radius:50%;
background-color: ${props=>{return props.statusUser ? 'green':'red'}};
`;

export const Avatar = styled.img`
width: 48px;
`;

export const Name = styled.p`
font-weight: 600;
font-size: 20px;
`;


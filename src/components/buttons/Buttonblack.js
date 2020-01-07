import styled from "styled-components";

const Buttonblack = styled.button.attrs(props => ({
    className: "small",
}))`
    color: #FFFFFF;
    padding: 1rem 1.5rem;
    background: #000000;
    border: 2px solid #000000;
    box-sizing: border-box;
    border-radius: 6px;
    font-size: 13px;
    cursor: pointer;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
`;

export default Buttonblack;
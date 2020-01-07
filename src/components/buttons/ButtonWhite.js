import styled from "styled-components";

const ButtonWhite = styled.button.attrs(props => ({
    className: "small",
  }))`
    color: #000;
    padding: 1rem 1.5rem;
    background: #FFF;
    border: 2px solid #000000;
    cursor: pointer;
    border-radius: 6px;
    font-size: 13px;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    text-align: center;
`;

export default ButtonWhite;
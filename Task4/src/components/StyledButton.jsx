// src/components/StyledButton.js
import styled from 'styled-components';

const StyledButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  
  padding: ${props => props.theme.spacing.medium};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  /* &:hover {
    background-color: ${props => props.theme.colors.secondary};
  } */
`;

export default StyledButton;

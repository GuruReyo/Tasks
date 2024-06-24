// src/components/StyledForm.js
import styled from 'styled-components';

export const StyledForm = styled.form`
  background: ${props => props.theme.colors.background};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  color: ${props => props.theme.colors.text};
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`;

export const StyledInput = styled.input`
  width: calc(100% - 16px);
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.primary};

  &:focus {
    border-color: ${props => props.theme.colors.secondary};
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;





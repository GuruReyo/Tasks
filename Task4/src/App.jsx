// src/App.js
import "./App.css";
import { useState } from "react";
import { lightTheme, darkTheme } from "../src/components/Theme";
import { ThemeProvider } from "styled-components";
import StyledButton from "./components/StyledButton";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  SubmitButton,
} from "./components/StyledForm";

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        <StyledButton onClick={toggleTheme}>
          {isLightTheme ? (
            <MdDarkMode />
            
          ) : (
            <CiLight style={{height:'20px',width:'20px'}}/>
          )}
        </StyledButton>
        <StyledForm>
          <StyledLabel htmlFor="name">Name</StyledLabel>
          <StyledInput type="text" name="name" id="name" required />

          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledInput type="email" name="email" id="email" required  />
          <SubmitButton type="submit" onClick={()=>{
            console.log("Data Submitted")
          }}>Submit</SubmitButton>
        </StyledForm>
    </ThemeProvider>
  );
}

export default App;

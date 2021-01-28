import { useContext } from "react";
import { Container, Form } from "react-bootstrap";
import {
  Title,
  ThemeToggle,
  SunIcon,
  MoonIcon,
} from "../styles/searchBarStyles";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className="App-header">
      <Container>
        <Title>devjobs</Title>
        <ThemeToggle>
          <SunIcon size="20" />
          <Form.Check
            type="switch"
            id="custom-switch"
            onChange={() => {
              setDarkMode(!darkMode);
            }}
          />
          <MoonIcon size="20" />
        </ThemeToggle>
      </Container>
    </div>
  );
};
export default Header;

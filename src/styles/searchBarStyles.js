import { Moon } from "@styled-icons/heroicons-solid";
import { Sun } from "@styled-icons/heroicons-solid";
import { Search } from "@styled-icons/heroicons-outline";
import { Location } from "@styled-icons/ionicons-sharp";
import { Filter2 } from "@styled-icons/remix-fill";
import styled from "styled-components";
import { Form, Row } from "react-bootstrap";

export const SearchIcon = styled(Search)`
  color: #5865e0;
`;
export const SearchIconPrimary = styled(Search)`
  color: white;
  margin: 0px;
`;
export const FilterIcon = styled(Filter2)`
  color: #5a6c86;
`;
export const LocationIcon = styled(Location)`
  color: #5865e0;
`;
export const SunIcon = styled(Sun)`
  top: 2px;
  position: relative;
  margin-right: 5px;
`;
export const MoonIcon = styled(Moon)`
  position: relative;
  top: 2px;
`;
export const Title = styled.span`
  float: left;
  font-weight: 500;
`;
export const CheckBoxLabel = styled(Form.Check.Label)`
  color: ${(props) => props.theme.colors.textColor};
`;
export const ThemeToggle = styled.span`
  float: right;
  font-weight: 500;
  display: flex;
  top: 10px;
  position: relative;
`;
export const SearchBar = styled(Row)`
  width: 80%;
  margin: auto;
  background-color: ${(props) => props.theme.colors.cardBackground};
  border-radius: 5px;
  padding: 10px;
  position: relative;
  top: -30px;
  @media (max-width: 925px) {
    display: none;
  }
`;

export const SearchBarMobile = styled(Row)`
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  width: 80%;
  margin: auto;
  padding: 10px;
  position: relative;
  top: -30px;
  background-color: ${(props) => props.theme.colors.cardBackground};
  @media (min-width: 925px) {
    display: none;
  }
`;

export const InputField = styled(Form.Control)`
  color: ${(props) => props.theme.colors.textColor};
  &:focus {
    outline: none;
  }
`;

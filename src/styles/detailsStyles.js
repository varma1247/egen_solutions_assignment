import styled from "styled-components";
import { Row } from "react-bootstrap";
import backgroundImage from "../assets/headerBackground.jpg";

export const DetailsHeader = styled(Row)`
  width: 60%;
  margin: auto;
  display: flex;
  background-color: ${(props) => props.theme.colors.cardBackground};
  border-radius: 5px;
  position: relative;
  top: -30px;
`;

export const DetailsContent = styled(Row)`
  width: 60%;
  margin: auto;
  background-color: ${(props) => props.theme.colors.cardBackground};
  border-radius: 5px;
  margin-top: 30px;
  text-align: "center";
  padding: 30px;
`;

export const HowToApply = styled(Row)`
  width: 60%;
  margin: auto;
  color: white;
  border-radius: 5px;
  margin-top: 30px;
  text-align: "center";
  padding: 30px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  a {
    color: white;
  }
`;

export const JobTitle = styled.h6`
  color: ${(props) => props.theme.colors.textColor};
  text-overflow: ellipsis;
  font-weight: bold;
  font-size: large;
  margin-top: 25px;
`;

export const CompanyUrl = styled.span`
  color: #848b95;
  font-size: 12px;
  margin-top: 5px;
  margin-left: 15px;
`;

export const CompanyUrlButton = styled.a`
  color: #5865e0;
  font-size: 12px;
  font-weight: bold;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.buttonColor};
  border-radius: 5px;
  text-align: center;
  &:hover {
    text-decoration: none;
  }
`;

export const JobSmallDetails = styled.span`
  color: #848b95;
  font-size: 12px;
`;

export const JobDescription = styled.p`
  margin-top: 20px;
  color: #848b95;
  font-size: 15px;
`;

export const JobLocation = styled.span`
  color: #5865e0;
  font-size: 12px;
`;

export const ApplyNowUrl = styled.a`
  color: white;
  font-size: 12px;
  font-weight: bold;
  &:hover {
    text-decoration: none;
    color: white;
  }
`;

export const CompanyLogoBig = styled.img`
  @media (max-width: 768px) {
    position: relative;
    top: -20px;
  }
`;

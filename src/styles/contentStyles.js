import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const AppContent = styled.div`
  min-height: 85vh;
`;

export const AppLayout = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.background};
  flex-direction: column;
  font-family: revert;
`;

export const JobTitle = styled.h6`
  color: ${(props) => props.theme.colors.textColor};
  text-overflow: ellipsis;
  font-weight: bold;
  font-size: small;
  margin-top: 5px;
`;

export const JobCard = styled(Col)`
  background-color: ${(props) => props.theme.colors.cardBackground};
  border-radius: 5px;
  height: 220px;
`;

export const AllJobs = styled(Row)`
  margin: 5px;
  display: flex;
  justify-content: center;
`;

export const JobSmallDetails = styled.span`
  color: #848b95;
  font-size: 12px;
`;

export const LoadMore = styled(Row)`
  margin: 20px;
  display: flex;
  justify-content: center;
`;

export const CompanyLogoSmall = styled.img`
  position: relative;
  top: -20px;
`;

export const JobLocation = styled.span`
  color: #5865e0;
  font-size: 12px;
`;

export const JobDetailsLink = styled(Link)`
  color: ${(props) => props.theme.colors.textColor};
  &:hover {
    text-decoration: none;
  }
`;

export const CompanyUrl = styled.a`
  color: #848b95;
  font-size: 12px;
  &:hover {
    text-decoration: none;
  }
`;

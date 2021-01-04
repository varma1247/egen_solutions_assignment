import { useEffect, useState } from "react";
import {
  DetailsHeader,
  DetailsContent,
  JobSmallDetails,
  JobLocation,
  JobDescription,
  JobTitle,
  CompanyUrl,
  CompanyUrlButton,
  CompanyLogoBig,
  ApplyNowUrl,
  HowToApply,
} from "../styles/detailsStyles";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import moment from "moment";

const Details = (props) => {
  const [details, setDetails] = useState({});
  useEffect(() => {
    const getDetails = async () => {
      const result = await axios(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${props.match.params.id}.json?markdown=false`
      );
      setDetails(result.data);
    };
    getDetails();
  }, []);
  return (
    <>
      <DetailsHeader
        className="text-center"
        style={{ justifyContent: "center" }}
      >
        <Col sm={10} md={3} className="pl-0">
          <CompanyLogoBig
            src={details.company_logo}
            width={100}
            height={100}
          ></CompanyLogoBig>
        </Col>
        <Col sm={10} md={6}>
          <JobTitle>{details.company}</JobTitle>
          <CompanyUrl>{details.company_url}</CompanyUrl>
        </Col>
        <Col
          sm={10}
          md={3}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CompanyUrlButton
            href={details.company_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Company Site
          </CompanyUrlButton>
        </Col>
      </DetailsHeader>
      <DetailsContent>
        <Col xs={12}>
          <JobSmallDetails>
            {moment(details.created_at).fromNow()}
          </JobSmallDetails>
          <JobSmallDetails>&nbsp;&nbsp;.&nbsp;&nbsp;</JobSmallDetails>
          <JobSmallDetails>{details.type}</JobSmallDetails>
        </Col>
        <Col>
          <Row>
            <Col sm={8} xs={12}>
              <JobTitle>{details.title}</JobTitle>
              <div className="mt-3">
                <JobLocation>{details.location}</JobLocation>
              </div>
            </Col>
            <Col sm={4} xs={12} className="text-center">
              <ApplyNowUrl
                role="button"
                className="btn btn-primary"
                href={details.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </ApplyNowUrl>
            </Col>
          </Row>
          <Row>
            <Col>
              <JobDescription
                dangerouslySetInnerHTML={{ __html: details.description }}
              ></JobDescription>
            </Col>
          </Row>
        </Col>
      </DetailsContent>
      <HowToApply>
        <Col xs={12}>
          <h5>Apply Now</h5>
        </Col>
        <Col dangerouslySetInnerHTML={{ __html: details.how_to_apply }}></Col>
      </HowToApply>
    </>
  );
};

export default Details;

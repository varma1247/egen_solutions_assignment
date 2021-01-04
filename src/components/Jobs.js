import { useContext } from "react";
import { Button } from "react-bootstrap";
import { JobsContext } from "../context/JobsContext";
import moment from "moment";
import axios from "axios";
import {
  JobCard,
  JobTitle,
  AllJobs,
  LoadMore,
  JobSmallDetails,
  CompanyUrl,
  JobLocation,
  CompanyLogoSmall,
  JobDetailsLink,
} from "../styles/contentStyles";

const Jobs = () => {
  const {
    jobs,
    setJobs,
    page,
    setPage,
    description,
    location,
    isFulltime,
    noJobs,
    setNoJobs,
  } = useContext(JobsContext);
  const onLoadMore = async (pageNumber) => {
    const des = description.split(" ").join("+");
    const loc = location.split(" ").join("+");
    let searchUrl = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${des}&location=${loc}&full_time=${isFulltime}&page=${pageNumber}`;
    const result = await axios(searchUrl);
    if (result.data.length === 0) {
      setNoJobs(true);
    } else {
      setNoJobs(false);
      setJobs([...result.data]);
    }
  };
  return (
    <>
      {jobs.length > 0 && (
        <>
          <AllJobs>
            {jobs.map((job, index) => {
              return (
                <JobCard key={index} sm={10} md={3} className="m-3">
                  <div>
                    <CompanyLogoSmall
                      alt={job.company}
                      width={40}
                      height={40}
                      src={job.company_logo}
                    ></CompanyLogoSmall>
                  </div>
                  <div>
                    <JobSmallDetails>
                      {moment(job.created_at).fromNow()}
                    </JobSmallDetails>
                    <JobSmallDetails>&nbsp;&nbsp;.&nbsp;&nbsp;</JobSmallDetails>
                    <JobSmallDetails>{job.type}</JobSmallDetails>
                  </div>
                  <div>
                    <JobTitle>
                      <JobDetailsLink
                        to={`/${job.id}`}
                      >
                        {job.title}
                      </JobDetailsLink>
                    </JobTitle>
                  </div>
                  <div>
                    <CompanyUrl
                      href={job.company_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {job.company}
                    </CompanyUrl>
                  </div>
                  <div className="mt-3">
                    <JobLocation>{job.location}</JobLocation>
                  </div>
                </JobCard>
              );
            })}
          </AllJobs>
          <LoadMore>
            <Button
              onClick={() => {
                setPage(page + 1);
                onLoadMore(page + 1);
              }}
            >
              Load More
            </Button>
          </LoadMore>
        </>
      )}
      {noJobs && (
        <h6 className="text-center">No more jobs with this search.....</h6>
      )}
    </>
  );
};

export default Jobs;

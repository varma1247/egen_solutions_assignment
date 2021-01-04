import React, { useState, createContext } from "react";

export const JobsContext = createContext();

export const JobsContextProvider = (props) => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [isFulltime, setIsFulltime] = useState(false);
  const [noJobs, setNoJobs] = useState(false);
  return (
    <JobsContext.Provider
      value={{
        jobs: jobs,
        setJobs: setJobs,
        page: page,
        setPage: setPage,
        description: description,
        setDescription: setDescription,
        location: location,
        setLocation: setLocation,
        isFulltime: isFulltime,
        setIsFulltime: setIsFulltime,
        noJobs: noJobs,
        setNoJobs: setNoJobs,
      }}
    >
      {props.children}
    </JobsContext.Provider>
  );
};

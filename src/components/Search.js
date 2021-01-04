import { useEffect, useContext, useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import axios from "axios";
import { JobsContext } from "../context/JobsContext";
import {
  SearchIcon,
  SearchBar,
  LocationIcon,
  CheckBoxLabel,
  InputField,
  FilterIcon,
  SearchIconPrimary,
  SearchBarMobile,
} from "../styles/searchBarStyles";

const Search = () => {
  const {
    setJobs,
    description,
    setDescription,
    location,
    setLocation,
    isFulltime,
    setIsFulltime,
    setNoJobs,
  } = useContext(JobsContext);
  const [showFilters, setShowFilters] = useState(false);
  const onChangeDescription = (val) => {
    setDescription(val);
  };
  const onChangeLocation = (val) => {
    setLocation(val);
  };
  const onChangeIsFulltime = () => {
    setIsFulltime(!isFulltime);
  };
  const onSearch = async () => {
    const des = description.split(" ").join("+");
    const loc = location.split(" ").join("+");
    let searchUrl = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${des}&location=${loc}&full_time=${isFulltime}&page=1`;
    const result = await axios(searchUrl);
    if (result.data.length === 0) {
      setNoJobs(true);
    } else {
      setNoJobs(false);
      setJobs([...result.data]);
    }
  };

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const result = await axios(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en
          `);
          setLocation(result.data.city);
        });
      }
    };
    getLocation();
  }, [setLocation]);
  return (
    <>
      <SearchBar className="text-center">
        <Col className="d-flex" style={{ borderRight: "1px solid #f5f5f5" }}>
          <Form.Label column className="mr-3">
            <SearchIcon size="25" />
          </Form.Label>
          <InputField
            plaintext
            placeholder="Filter by title, companies, expertise..."
            onChange={(e) => {
              onChangeDescription(e.target.value);
            }}
          />
        </Col>
        <Col className="d-flex" style={{ borderRight: "1px solid #f5f5f5" }}>
          <Form.Label column className="mr-3">
            <LocationIcon size="25" />
          </Form.Label>
          <InputField
            plaintext
            placeholder="Filter by location..."
            defaultValue={location}
            onChange={(e) => {
              onChangeLocation(e.target.value);
            }}
          />
        </Col>
        <Col className="d-flex">
          <div>
            <Form.Label column className="mr-3">
              <Form.Check.Input
                type="checkbox"
                id="autoSizingCheck"
                onChange={(e) => {
                  onChangeIsFulltime(e.target.value);
                }}
              />
              <CheckBoxLabel>Full Time Only</CheckBoxLabel>
            </Form.Label>
          </div>
          <Button
            onClick={() => {
              onSearch();
            }}
          >
            Search
          </Button>
        </Col>
      </SearchBar>
      <SearchBarMobile>
        <Col className="d-flex p-2">
          <InputField
            plaintext
            placeholder="Filter by title, companies, expertise..."
            onChange={(e) => {
              onChangeDescription(e.target.value);
            }}
          />
          <Form.Label column className="mr-4">
            <FilterIcon
              size="25"
              onClick={() => {
                setShowFilters(!showFilters);
              }}
            />
          </Form.Label>
          <Button>
            <SearchIconPrimary
              size="25"
              onClick={() => {
                onSearch();
              }}
            />
          </Button>
        </Col>
        {showFilters && (
          <>
            <Col className="pl-2">
              <InputField
                plaintext
                placeholder="Filter by location..."
                defaultValue={location}
                onChange={(e) => {
                  onChangeLocation(e.target.value);
                }}
              />
            </Col>
            <Col className="mt-2">
              <Form.Label column>
                <Form.Check.Input
                  type="checkbox"
                  id="autoSizingCheck"
                  onChange={(e) => {
                    onChangeIsFulltime(e.target.value);
                  }}
                />
                <CheckBoxLabel>Full Time Only</CheckBoxLabel>
              </Form.Label>
            </Col>
          </>
        )}
      </SearchBarMobile>
    </>
  );
};

export default Search;

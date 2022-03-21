import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "gatsby";

const NotFound = () => {
  return (
    <div className="page-wrap d-flex flex-row align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <span className="display-1 d-block">404</span>
            <div className="mb-4 lead">
              Sorry dude, nothing to see here !!! My 404 page sucks by the way
            </div>
            <Link to="/">
              <Button>Back Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

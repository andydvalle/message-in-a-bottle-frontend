import React from "react";
import { Link } from "react-router-dom";

class Jumbotron extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="jumbotron-content col-sm-4 p-3">
          <h1 className="display-4">Oh, look!</h1>
          <p className="lead">
            A bottled message washed upon shore! Message in a Bottle is a safe space for people to share thoughts and words with others around the world.
          </p>
          <hr className="my-4" />
          <p>
            Send or receive anonymous messages to other writers. Don't worry — it'll only take a few seconds to cross the ocean. 
          </p>
          <p className="lead">
                <Link className="btn btn-primary btn-lg" to="/signup" role="button">
                  Start here
                </Link>
              </p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;

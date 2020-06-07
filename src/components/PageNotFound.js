import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'


export default function PageNotFound() {
    return (
        <div>
            <Jumbotron>
                <h1>GitHub:404 Page Not Found</h1>
                <p>
                    The page you are looking for cannot be found my dear and beloved friend.
  </p>
                <p>
                    <Button variant="primary">Go Back</Button>
                </p>
            </Jumbotron>
        </div>
    )
}

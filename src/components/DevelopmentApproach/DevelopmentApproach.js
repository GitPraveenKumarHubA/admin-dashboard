import React from "react";
import { Card } from "react-bootstrap";

function DevelopmentApproach() {
  return (
    <Card>
      <Card.Header className="text-primary fw-bold">
        Development Approach
      </Card.Header>
      <Card.Body>
        <p>
          SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order
          to reduce CSS bloat and poor page performance. Custom CSS classes are
          used to create custom components and custom utility classes
        </p>
        <p>
          Before working with this theme, you should become familiar with the
          Bootstrap framework, especially the utility classes
        </p>
      </Card.Body>
    </Card>
  );
}

export default DevelopmentApproach;

import React from "react";
import ProgressBar from "./ProgressBar";

function Projects() {
  return (
    <div className="projects">
      <ProgressBar title="Server Migrations" percentage={20} color="danger" />
      <ProgressBar title="Sales Tracking" percentage={40} color="warning" />
      <ProgressBar title="Customer Database" percentage={60} color="primary" />
      <ProgressBar title="Payout Details" percentage={80} color="info" />
      <ProgressBar title="Acount Setup" percentage={100} color="success" />
    </div>
  );
}

export default Projects;

import React from "react";
import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import Card from "react-bootstrap/Card";

const Projects = () => {
  const { data, error } = useSWR("/api/github", fetcher);
  const numProjects = data?.numProjects;
  return (
    <div>
      <Card style={{ padding: "5px" }} className="shadow-border">
        <Card.Title>Github Projects</Card.Title>
        <Card.Text style={{ fontSize: "30px" }}>{numProjects}</Card.Text>
      </Card>
    </div>
  );
};

export default Projects;

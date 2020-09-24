import React from "react";
import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import Card from "react-bootstrap/Card";

const Forks = () => {
  const { data, error } = useSWR("/api/github", fetcher);
  const numForks = data?.numForks;
  return (
    <div>
      <Card style={{ padding: "5px" }} className="shadow-border">
        <Card.Title>Github Forks</Card.Title>
        <Card.Text style={{ fontSize: "30px" }}>{numForks}</Card.Text>
      </Card>
    </div>
  );
};

export default Forks;

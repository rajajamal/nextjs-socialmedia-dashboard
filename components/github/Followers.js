import React from "react";
import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import Card from "react-bootstrap/Card";

const Followers = () => {
  const { data, error } = useSWR("/api/github", fetcher);
  const numFollowers = data?.numFollowers;
  return (
    <div>
      <Card style={{ padding: "5px" }} className="shadow-border">
        <Card.Title>Github Followers</Card.Title>
        <Card.Text style={{ fontSize: "30px" }}>{numFollowers}</Card.Text>
      </Card>
    </div>
  );
};

export default Followers;

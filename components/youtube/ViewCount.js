import React from "react";
import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import Card from "react-bootstrap/Card";

const ViewCount = () => {
  const { data, error } = useSWR("/api/youtube.js", fetcher);
  if (error) {
    console.log(error);
  }
  const viewCount = data?.viewCount;
  return (
    <div>
      <Card style={{ padding: "5px" }} className="shadow-border">
        <Card.Title>Youtube Views</Card.Title>
        <Card.Text style={{ fontSize: "10px" }}>{viewCount}</Card.Text>
      </Card>
    </div>
  );
};

export default ViewCount;

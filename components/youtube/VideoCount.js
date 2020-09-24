import React from "react";
import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import Card from "react-bootstrap/Card";
import videoCount from "../../pages/api/youtube";

const VideoCount = () => {
  //const { data, error } = useSWR("/api/youtube.js", fetcher);
  //   if (error) {
  //     console.log(error);
  //   }
  //   const videoCount = data?.videoCount;
  return (
    <div>
      <Card style={{ padding: "5px" }} className="shadow-border">
        <Card.Title>Youtube Videos</Card.Title>
        <Card.Text style={{ fontSize: "30px" }}>{videoCount}</Card.Text>
      </Card>
    </div>
  );
};

export default VideoCount;

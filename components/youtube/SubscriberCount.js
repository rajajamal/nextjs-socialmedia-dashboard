import React from "react";
import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import Card from "react-bootstrap/Card";
import subscriberCount from "../../pages/api/youtube";

const SubscriberCount = () => {
  const { data, error } = useSWR("/api/youtube.js", fetcher);
  //   if (error) {
  //     console.log(error);
  //   }
  //const subscriberCount = data?.subscriberCount;
  return (
    <div>
      <Card style={{ padding: "5px" }} className="shadow-border">
        <Card.Title>Youtube Subscriber</Card.Title>
        <Card.Text style={{ fontSize: "30px" }}>{subscriberCount}</Card.Text>
      </Card>
    </div>
  );
};

export default SubscriberCount;

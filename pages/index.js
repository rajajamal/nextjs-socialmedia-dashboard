import Head from "next/head";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ViewCount from "../components/youtube/ViewCount";
import VideoCount from "../components/youtube/VideoCount";
import SubscriberCount from "../components/youtube/SubscriberCount";
import Projects from "../components/github/Projects";
import Forks from "../components/github/Forks";
import Followers from "../components/github/Followers";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dashboard</title>
      </Head>

      <h1 className="text-center">Raja's Dashboard</h1>

      <Row>
        <Col md>
          <SubscriberCount />
          <br />
        </Col>

        <Col md>
          <ViewCount />
          <br />
        </Col>

        <Col md>
          <VideoCount />
          <br />
        </Col>
      </Row>

      <Row>
        <Col md>
          <Projects />
          <br />
        </Col>

        <Col md>
          <Forks />
          <br />
        </Col>

        <Col md>
          <Followers />
          <br />
        </Col>
      </Row>
    </div>
  );
}

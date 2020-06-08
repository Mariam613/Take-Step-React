import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CreateTask from "./CreateTaskSection/createTask";
import Post from "./../../Components/post/post";
import OwnerProfileCard from "./../../Components/Card/BusinessOwnerProfileCard/OwnerProfileCard";
import Ads from "../../Components/ads/ads";
import InsideNav from "./../../Layout/Navbar/insidenav";

const HomePageOwner = props => {
  console.log(props.currentUser.paymentData);

  return (
    <>
      <InsideNav />
      <Container
        style={{
          maxWidth: "1500px",

          paddingRight: "50px",
          paddingLeft: "50px",
          paddingTop: "15px"
        }}
      >
        <Row
          style={{
            marginTop: "5rem",
            marginLeft: "30px",
            marginRight: "30px"

            //   "justify-content": "center",
          }}
        >
          <Col
            xs="3"
            style={
              {
                // marginBottom: "0px",
                // marginLeft: "30px",
                //   "justify-content": "center",
              }
            }
          >
            <OwnerProfileCard />
          </Col>
          <Col xs="6">
            {props.currentUser.paymentData && <CreateTask />}
            <Post></Post>
            <Post></Post>
          </Col>
          <Col
            xs="3"
            style={
              {
                // marginBottom: "0px",
                // paddingLeft: "15px",
                //   "justify-content": "center",
              }
            }
          >
            <Ads />
          </Col>
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = reduxState => {
  return {
    currentUser: reduxState.Users.currentUser
  };
};
export default connect(mapStateToProps)(HomePageOwner);

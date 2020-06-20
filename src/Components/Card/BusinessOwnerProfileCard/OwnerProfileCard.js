import React from "react";
import "./OwnerProfileCard.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const OwnerProfileCard = (props) => {
  const user = localStorage.getItem("user");
  const volunteerId = JSON.parse(user).id;
  const { users } = props;
  console.log("users", users);
  const hanldeClick = () => {
    console.log(props);
    props.history.push(`/profile/${volunteerId}`);
  };
  return (
    <Card
      className="owner-card-container owner-card-border"
      style={{ marginTop: "30px" }}
    >
      <Card className="owner-inner-card">
        <CardImg
          top
          width="100%"
          className="mt-4 rounded-circle owner-card-img"
          src="./img/developer.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle
            onClick={() => {
              hanldeClick();
            }}
            className="owner-card-upper-text"
          >
            {" "}
            <strong>
              {users.currentUser.firstName + " " + users.currentUser.lastName}
            </strong>{" "}
          </CardTitle>
          <CardSubtitle className="owner-card-upper-text">
            {users.firstName}
          </CardSubtitle>
        </CardBody>
      </Card>
      <CardBody className="owner-card-lower-text">
        <CardSubtitle>All Jobs</CardSubtitle>
        <CardSubtitle>{users.jobs.length}</CardSubtitle>
      </CardBody>
    </Card>
  );
};
const mapStateToProps = (state) => ({
  users: state.Users,
});

export default withRouter(connect(mapStateToProps)(OwnerProfileCard));

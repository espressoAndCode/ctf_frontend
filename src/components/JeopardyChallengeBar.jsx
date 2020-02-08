import React, { Component } from "react";
import axios from "axios";
import { Accordion, Card, Form , Button, Col } from "react-bootstrap";
import bgImg from "../images/grunge.jpg";
 import { ToastContainer, toast, Slide } from "react-toastify";


class JeopardyChallengeBar extends Component {
  state = {
    update: {
      challengeId: "",
      team: "",
      answer: ""
    }
  };

  success = () => toast("That's correct !");

  handleSubmit = event => {
    event.preventDefault();
    this.postAnswer();
    this.setState({ update: { challengeId: "", team: "", answer: "" } });
  };

  handleChange = ({ currentTarget: input }) => {
    const update = { ...this.state.update };
    update[input.name] = input.value;
    this.setState({ update });
    if (input.name === "team") {
      update["challengeId"] = input.id;
      this.setState({ update });
    }
  };

  postAnswer() {
    axios
      .post("http://127.0.0.1:5000/jeopardy", {
        team: this.state.update.team,
        answer: this.state.update.answer,
        id: this.state.update.challengeId
      })
      .then(function(response) {
        console.log(response);
        if (response.data === "Success"){
          toast.success("That's correct!", {
            position: toast.POSITION.BOTTOM_RIGHT});
        } else if(response.data === "Duplicate"){
          toast.warn("You already have that flag.", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        } else{
          toast.error("Sorry, try again.", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        }
      })
      .catch(function(error) {

      });
  }

  render() {
    const styles = {
      main: {
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        // backgroundColor: "#000",
        color: "#fff",
        borderRadius: "20px",
        margin: "10px",
        // whiteSpace: "nowrap",
        fontSize: "1.5em"
      },
      spacer: {
        paddingTop: "10px"
      },
      hint: {
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        // backgroundColor: "#000",
        color: "#fff"
      },
      toast: {
        color: "#000"
      }
    };

    return (
      <Accordion defaultActiveKey="0" style={styles.spacer}>
        <Card key={this.props.name} style={styles.main} bsPrefix={styles.main}>
          <Accordion.Toggle as={Card.Header} eventKey={this.props.idx}>
            {this.props.name}
          </Accordion.Toggle>
          <Accordion.Collapse>
            <Card.Body>
              <ToastContainer transition={Slide} style={styles.toast} />
              <p>{this.props.instructions}</p>
              <Accordion defaultActiveKey="0">
                <Card style={styles.hint}>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="secondary">
                      Need a hint?
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse>
                    <Card.Body>
                      <p>{this.props.hint}</p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>

              <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                  <Col>
                    <Form.Group controlId={this.props.id}>
                      <Form.Control
                        onChange={this.handleChange}
                        size="lg"
                        type="text"
                        as="input"
                        name="team"
                        value={this.state.update.team}
                        placeholder="Enter your team tag here..."
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Control
                        onChange={this.handleChange}
                        size="lg"
                        type="text"
                        as="input"
                        name="answer"
                        value={this.state.update.answer}
                        placeholder="Enter your answer here..."
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>

                <Button variant="danger" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

export default JeopardyChallengeBar;




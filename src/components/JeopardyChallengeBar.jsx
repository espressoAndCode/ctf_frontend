import React, { Component } from "react";
import axios from "axios";
import { Accordion, Card, Form , Button, Col } from "react-bootstrap";
import bgImg from "../images/grunge.jpg";


class JeopardyChallengeBar extends Component {

  state = {
    update:{
      challengeId: "",
      team: "",
      answer: ""
    }
  };


  handleSubmit = event => {
      event.preventDefault();
    console.log("Submitted");
    console.log(this.state.update.challengeId);
    console.log(this.state.update.team);
    console.log(this.state.update.answer);
    this.postAnswer()
    this.setState({ update: { challengeId: "", team: "", answer: "" } });
  };

  handleChange = ({ currentTarget: input}) => {
    console.log("Input: ", input);
    const update = {...this.state.update};
    update[input.name] = input.value;
    this.setState({update});
    if (input.name === "team"){
      update["challengeId"] = input.id;
      this.setState({ update });
    }
  };


  postAnswer() {
    axios
        .post("http://127.0.0.1:5000/jeopardy", {
          "team": this.state.update.team,
          "answer": this.state.update.answer,
          "id": this.state.update.challengeId
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
  };

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
                        // value={this.state.team}
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

                <Button variant="danger" type="submit" >
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




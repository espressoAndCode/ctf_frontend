import React, { Component } from "react";
import axios from "axios";
import { Accordion, Card, Form , Button, InputGroup } from "react-bootstrap";
import bgImg from "../images/grunge.jpg";


class JeopardyChallengeBar extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // state = {
  //   team: "",
  //   answer: ""
  // };

  postAnswer() {
    console.log("Team: ", document.getElementById("team"));
    console.log("Answer: ", document.getElementById("answer"));

    //   axios.post('http://127.0.0.1:5000/jeopardy', {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone'
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
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

              {/* <InputGroup size="lg">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-lg" ref="team">
                    Enter your team tag here...
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </InputGroup> */}

              <input
                type="text"
                className="form-control"
                ref={c => (this.title = c)}
                name="title"
              />

              {/* <Form>
                <Form.Group>
                  <Form.Control
                    size="lg"
                    type="text"
                    id="team"
                    ref={this.team}
                    placeholder="Enter your team tag here..."
                    // value={this.state.team}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    size="lg"
                    type="text"
                    id="answer"
                    placeholder="Enter your answer here..."
                  />
                </Form.Group> */}

              <Button variant="danger" onClick={() => this.postAnswer()}>
                Submit
              </Button>
              {/* </Form> */}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

export default JeopardyChallengeBar;




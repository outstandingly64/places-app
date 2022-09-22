import React from "react";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";
import Input from "../FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../Utilities/validators";

import Card from "./Card";

/**
 * TODO: Continue Implementing Frontend with Semantic UI Components
 * TO ACCESS THIS COMPONENT: website path ending in '/semanticform'
 */
const SemanticForm = () => {
  return (
    <Card className="authentication">
      <Segment placeholder>
        <Grid columns={1} relaxed="very" stackable>
          <Grid.Column>
            <Form>
              <Form.Input
                icon="user"
                iconPosition="left"
                label="Username"
                placeholder="Username"
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="Password"
                type="password"
              />

              <Button content="Login" primary />
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    </Card>
  );
};

export default SemanticForm;

//IGNORE, DELETE LATER.
/* <Grid.Column verticalAlign='middle'>
        <Button content='Sign up' icon='signup' size='big' />
      </Grid.Column> */

import React from "react";
import { History } from "history";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Button } from "@material-ui/core";

interface ComponentProps extends RouteComponentProps {
  history: History;
}
const Component: React.FC<ComponentProps> = props => {
  return (
    <div>
      <Button
        onClick={() => props.history.push("/page1")}
        color="primary"
        variant={"outlined"}
      >
        Page1
      </Button>
    </div>
  );
};

export default withRouter(Component);

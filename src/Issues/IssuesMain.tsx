import React, { useEffect, useRef } from "react";
import { Panel } from "../shared/Panel";
import { Button } from "../shared/Button";
import { Text } from "../shared/Text";
import { useHistory, useRouteMatch } from "react-router";

export const IssuesMain = () => {
  const ref = useRef<any>(null);

  const history = useHistory();
  const match = useRouteMatch();

  useEffect(() => {
    const goToNew = () => history.push(`${match.url}/new`);
    const goToList = () => history.push(`${match.url}/list`);

    ref.current.key("c", goToNew);
    ref.current.key("l", goToList);

    return () => {
      ref.current.unkey("c", goToNew);
      ref.current.unkey("l", goToList);
    };
  }, []);

  return (
    <Panel ref={ref} height={11} top="25%" left="center">
      <Text left="center">Issues</Text>
      <Text top={2} left="center">
        Click on the button or press the corresponding key.
      </Text>

      <Button left="center" bottom={3}>
        l: List Issues
      </Button>

      <Button left="center" bottom={1}>
        c: Create New Issue
      </Button>
    </Panel>
  );
};

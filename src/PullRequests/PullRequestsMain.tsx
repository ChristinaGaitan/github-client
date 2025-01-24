import React, { useCallback, useEffect, useRef } from "react";
import { Panel } from "../shared/Panel";
import { Button } from "../shared/Button";
import { Text } from "../shared/Text";
import { useHistory, useRouteMatch } from "react-router";
import { debounce } from "../utils/debounce";

export const PullRequestsMain = () => {
  const ref = useRef<any>(null);

  const history = useHistory();
  const match = useRouteMatch();

  const goToNew = () =>
    useCallback(
      debounce(() => history.push(`${match.url}/new`), 100),
      [],
    );
  const goToList = () =>
    useCallback(
      debounce(() => history.push(`${match.url}/list`), 100),
      [],
    );

  useEffect(() => {
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
        l: List Pull Requests
      </Button>

      <Button left="center" bottom={1}>
        c: Create New Pull Request
      </Button>
    </Panel>
  );
};

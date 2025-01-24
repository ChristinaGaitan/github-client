import React from "react";
import { Panel } from "../shared/Panel";
import { Text } from "../shared/Text";
import { Route, Switch, useRouteMatch } from "react-router";
import { PullRequestsMain } from "./PullRequestsMain";

const NewPullRequest = () => <>New PullRequest</>;
const ListPullRequest = () => <>List PullRequest</>;

export const PullRequests = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.path} component={PullRequestsMain} />
      <Route path={`${match.path}/new`} component={NewPullRequest} />
      <Route path={`${match.path}/list`} component={ListPullRequest} />
    </Switch>
  );
};

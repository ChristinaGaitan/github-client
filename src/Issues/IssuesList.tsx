import { gql, useQuery } from "@apollo/client";
import React, { useEffect, useRef } from "react";
import { listIssues } from "./types/listIssues";
import { Panel } from "../shared/Panel";
import { List } from "../shared/List";
import { Text } from "../shared/Text";

const LIST_ISSUES = gql`
  query listIssues {
    viewer {
      issues(first: 100) {
        nodes {
          title
          url
        }
      }
    }
  }
`;

export const IssuesList = () => {
  const listRef = useRef<any>();
  const { data, loading, error } = useQuery<listIssues>(LIST_ISSUES);

  const issues = data?.viewer.issues.nodes;

  useEffect(() => {
    listRef?.current?.focus();
  }, [data]);

  if (loading) {
    return (
      <Panel height={10} top="25%" left="center">
        <Text left="center">Loading...</Text>
      </Panel>
    );
  }

  if (error) {
    return <>Error: {JSON.stringify(error)}</>;
  }

  return (
    <Panel height={10} top="25%" left="center">
      <blessed-text left="center" bg="white" fg="black" content="List Issues" />
      <List
        ref={listRef}
        top={2}
        onAction={(el) =>
          open(issues?.find((issue) => issue?.title === el.content)?.url || "")
        }
        items={issues?.map((issue) => issue?.title || "") || []}
      />
    </Panel>
  );
};

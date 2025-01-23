import React, { useEffect, useRef } from "react";
import { Panel } from "./Panel";
import { Text } from "./Text";
import { Button } from "./Button";

type NewEntityErrorProps = {
  onClose(): void;
  error: Error;
};

export const NewEntityError: React.FC<NewEntityErrorProps> = ({
  onClose,
  error,
}: NewEntityErrorProps) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    ref.current.key("enter", onClose);

    return () => {
      ref.current.unkey("enter", onClose);
    };
  }, []);

  return (
    <Panel ref={ref} top="25%" left="center" height={10}>
      <Text left="center">An error occurred</Text>
      <Text left="center" top={3}>
        {error.message}
      </Text>

      <Button left="center" bottom={1} onPress={onClose}>
        Enter: OK
      </Button>
    </Panel>
  );
};

import React, { useCallback, useEffect, useRef } from "react";
import { debounce } from "../utils/debounce";
import { Panel } from "./Panel";
import { Text } from "./Text";
import { Button } from "./Button";

type NewEntitySuccessProps = {
  url: string;
  title: string;
  onClose(): void;
};

export const NewEntitySuccess = ({
  url,
  title,
  onClose,
}: NewEntitySuccessProps) => {
  const ref = useRef<any>(null);

  const openUrl = useCallback(
    debounce(() => open(url), 100),
    [url],
  );

  useEffect(() => {
    ref.current.key("enter", onClose);
    ref.current.key("o", openUrl);

    return () => {
      ref.current.unkey("enter", onClose);
      ref.current.unkey("o", openUrl);
    };
  }, []);

  return (
    <Panel ref={ref} top="25%" left="center" height={10}>
      <Text left="center">{title}</Text>

      <Button left="center" bottom={3} onPress={openUrl}>
        o: Open in the browser
      </Button>

      <Button left="center" bottom={1} onPress={openUrl}>
        Enter: OK
      </Button>
    </Panel>
  );
};

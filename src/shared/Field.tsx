import React, { FC } from "react";
import { Text } from "./Text";
import { TextBox } from "./TextBox";

type FieldProps = {
  label: string;
  top?: number | string;
  onSubmit(): void;
};

export const Field: FC<FieldProps> = ({ label, top, onSubmit }) => {
  return (
    <>
      <Text top={top}>{label}</Text>
      <TextBox top={top} left={label.length} onSubmit={onSubmit} />
    </>
  );
};

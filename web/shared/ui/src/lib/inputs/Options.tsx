/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, FormLabel, Option, Select } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";
import {
  Controller,
  Control,
  FieldValues,
  UseFormSetValue,
} from "react-hook-form";

export const Options: React.FC<{
  label: string;
  name: string;
  control: Control<FieldValues> | any;
  options: Array<string>;
  defaultValue: string;
  setValue: UseFormSetValue<any>;
  sx?: SxProps;
  required?: boolean;
}> = ({
  label,
  name,
  control,
  options,
  defaultValue,
  setValue,
  sx = {},
  required = false,
}) => (
  <FormControl sx={{ pb: 1, ...sx }} required={required}>
    <FormLabel>{label}</FormLabel>
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      render={({ field: { value } }) => (
        <Select
          onChange={(e) => setValue(name, (e!.target as any).innerHTML)}
          value={value}
        >
          {options.map((opt) => (
            <Option key={opt} value={opt}>
              {opt}
            </Option>
          ))}
        </Select>
      )}
    />
  </FormControl>
);

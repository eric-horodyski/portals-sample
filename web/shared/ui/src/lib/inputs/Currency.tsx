import { InfoOutlined } from "@mui/icons-material";
import { FormControl, FormHelperText, FormLabel, Input } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";
import React from "react";
import { Controller, Control, FieldError, FieldValues } from "react-hook-form";
import { NumericFormat, NumericFormatProps } from "react-number-format";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumericFormatAdapter = React.forwardRef<NumericFormatProps, CustomProps>(
  (props, ref) => {
    const { onChange, ...other } = props;
    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) =>
          onChange({ target: { name: props.name, value: values.value } })
        }
        thousandSeparator
        valueIsNumericString
        allowLeadingZeros={false}
        allowNegative={false}
        decimalScale={2}
      />
    );
  }
);

export const Currency: React.FC<{
  label: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<FieldValues> | any;
  error?: FieldError;
  sx?: SxProps;
  required?: boolean;
  defaultValue?: number;
}> = ({
  label,
  name,
  control,
  error,
  sx = {},
  required = false,
  defaultValue = "",
}) => (
  <FormControl error sx={{ pb: 1, ...sx }} required={required}>
    <FormLabel>{label}</FormLabel>
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      render={({ field: { onChange, value, onBlur } }) => (
        <Input
          startDecorator="$"
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          error={!!error}
          slotProps={{ input: { component: NumericFormatAdapter } }}
        />
      )}
    />
    <FormHelperText>
      {error && <InfoOutlined />}
      {error?.message}
    </FormHelperText>
  </FormControl>
);

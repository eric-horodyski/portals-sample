import { InfoOutlined } from "@mui/icons-material";
import { FormControl, FormHelperText, FormLabel, Input } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";
import { Controller, Control, FieldError, FieldValues } from "react-hook-form";

export const Text: React.FC<{
  label: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<FieldValues> | any;
  error?: FieldError;
  sx?: SxProps;
  required?: boolean;
  defaultValue?: string;
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
          type="text"
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          error={!!error}
        />
      )}
    />
    <FormHelperText>
      {error && <InfoOutlined />}
      {error?.message}
    </FormHelperText>
  </FormControl>
);

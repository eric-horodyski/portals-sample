/// <reference types="react" />
import { SxProps } from "@mui/joy/styles/types";
import { Control, FieldError, FieldValues } from "react-hook-form";
export declare const Text: React.FC<{
    label: string;
    name: string;
    control: Control<FieldValues> | any;
    error?: FieldError;
    sx?: SxProps;
    required?: boolean;
    defaultValue?: string;
}>;

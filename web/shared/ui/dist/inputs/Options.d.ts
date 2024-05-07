/// <reference types="react" />
import { SxProps } from "@mui/joy/styles/types";
import { Control, FieldValues, UseFormSetValue } from "react-hook-form";
export declare const Options: React.FC<{
    label: string;
    name: string;
    control: Control<FieldValues> | any;
    options: Array<string>;
    defaultValue: string;
    setValue: UseFormSetValue<any>;
    sx?: SxProps;
    required?: boolean;
}>;

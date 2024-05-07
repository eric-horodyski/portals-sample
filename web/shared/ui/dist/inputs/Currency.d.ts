import { SxProps } from "@mui/joy/styles/types";
import React from "react";
import { Control, FieldError, FieldValues } from "react-hook-form";
export declare const Currency: React.FC<{
    label: string;
    name: string;
    control: Control<FieldValues> | any;
    error?: FieldError;
    sx?: SxProps;
    required?: boolean;
    defaultValue?: number;
}>;

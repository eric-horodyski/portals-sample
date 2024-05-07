/// <reference types="react" />
declare const Inputs: {
    Text: import("react").FC<{
        label: string;
        name: string;
        control: any;
        error?: import("react-hook-form").FieldError | undefined;
        sx?: import("@mui/joy/styles/types").SxProps | undefined;
        required?: boolean | undefined;
        defaultValue?: string | undefined;
    }>;
    Currency: import("react").FC<{
        label: string;
        name: string;
        control: any;
        error?: import("react-hook-form").FieldError | undefined;
        sx?: import("@mui/joy/styles/types").SxProps | undefined;
        required?: boolean | undefined;
        defaultValue?: number | undefined;
    }>;
    Options: import("react").FC<{
        label: string;
        name: string;
        control: any;
        options: string[];
        defaultValue: string;
        setValue: import("react-hook-form").UseFormSetValue<any>;
        sx?: import("@mui/joy/styles/types").SxProps | undefined;
        required?: boolean | undefined;
    }>;
    DateTime: import("react").FC<{
        label: string;
        name: string;
        control: any;
        error?: import("react-hook-form").FieldError | undefined;
        sx?: import("@mui/joy/styles/types").SxProps | undefined;
        required?: boolean | undefined;
    }>;
};
export { Inputs };

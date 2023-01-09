import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface AlertProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    name: string,
    closeAlert: () => void
}
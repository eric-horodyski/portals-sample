import { ReactNode } from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { BackButton } from "./BackButton";
import { Title } from "./Title";
interface LayoutComponent {
    (props: {
        children: ReactNode;
    }): JSX.Element;
    Header: typeof Header;
    Content: typeof Content;
    BackButton: typeof BackButton;
    Title: typeof Title;
}
declare const Layout: LayoutComponent;
export { Layout };

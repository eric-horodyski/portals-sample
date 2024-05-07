import { ReactNode } from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { BackButton } from "./BackButton";
import { Title } from "./Title";

interface LayoutComponent {
  (props: { children: ReactNode }): JSX.Element;
  Header: typeof Header;
  Content: typeof Content;
  BackButton: typeof BackButton;
  Title: typeof Title;
}

const Layout: LayoutComponent = ({ children }) => <div>{children}</div>;
Layout.Header = Header;
Layout.Content = Content;
Layout.BackButton = BackButton;
Layout.Title = Title;

export { Layout };

import React from "react";
import { PageTemplateWrapper } from "./styles";

interface PageTemplateProps {
  children: React.ReactNode;
}

const PageTemplate = ({ children }: PageTemplateProps) => {
  return <PageTemplateWrapper>{children}</PageTemplateWrapper>;
};

export default PageTemplate;

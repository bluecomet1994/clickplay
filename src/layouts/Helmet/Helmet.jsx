import React from "react";
import { Helmet } from "react-helmet";

const Page = ({description, title}) => {
  return (
    <Helmet>
      <meta
        name="description"
        content={description}
      />
      <title>{title}</title>
    </Helmet>
  );
};

export default Page;
 
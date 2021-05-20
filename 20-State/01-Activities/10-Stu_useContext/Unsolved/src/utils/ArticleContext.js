import React from "react";

const ArticleContext = React.createContext({
  
  search: "Wikipedia",
  title: "",
  url: "",
  error: ""
});

export default ArticleContext;

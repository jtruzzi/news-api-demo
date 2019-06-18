import React from "react";

// Components
import { Link } from "react-router-dom";
import { css } from "glamor";
import { categories } from "../constants";

class Categories extends React.Component {
  render() {
    return (
      <>
        <div className={`${categoryContainerCss}`}>
          {categories.map((category, i) => (
            <Link key={i} to={`/${category}`} className={`${categoryCss}`}>
              {category}
            </Link>
          ))}
        </div>
      </>
    );
  }
}

const categoryContainerCss = css({
  margin: "20px 0",
  display: "flex",
  justifyContent: "space-between",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    textAlign: "center"
  }
});

const categoryCss = css({
  fontSize: "20px",
  display: "inline-block",
  textTransform: "capitalize",
  color: "black",
  textDecoration: "none",
  backgroundColor: "#e3e3e3",
  padding: "5px 15px",
  width: "100%",
  textAlign: "center",
  "@media (max-width: 768px)": {
    marginBottom: "2px"
  },
  "&:hover": {
    textDecoration: "none",
    color: "#000000",
    backgroundColor: "#eeeeee"
  }
});

export default Categories;

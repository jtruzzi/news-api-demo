import React from "react";
import { getArticlesByCategory } from "../api/articles.js";
import { Link } from "react-router-dom";
import { css } from "glamor";
import { Container } from "react-bootstrap";

// Components
import ProgressLoader from "./ProgressLoader";
import ArticlesList from "./ArticlesList";

class Articles extends React.PureComponent {
  state = {
    loading: true,
    articles: []
  };

  componentWillMount = async () => {
    this.fetchArticles();
  };

  fetchArticles = async () => {
    const { match } = this.props;
    try {
      this.setState({
        loading: true,
        articles: []
      });
      const response = await getArticlesByCategory(match.params.category);
      this.setState({
        loading: false,
        articles: response.articles
      });
    } catch (e) {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { loading, articles } = this.state;
    const { match } = this.props;

    return (
      <>
        <ProgressLoader loading={loading} />
        <Container container="true">
          <div className={`${headingCss}`}>
            <Link to={"/"}>Back</Link>
            <h1>{match.params.category}</h1>
          </div>
          <ArticlesList articles={articles} loading={loading} />
        </Container>
      </>
    );
  }
}

const headingCss = css({
  textTransform: "capitalize",
  margin: "20px 0"
});

export default Articles;

import React from "react";
import { getTopHeadlines } from "../api/articles.js";
import { Container } from "react-bootstrap";

// Components
import ProgressLoader from "./ProgressLoader";
import ArticlesList from "./ArticlesList";
import Categories from "./Categories";

class Home extends React.Component {
  state = {
    loading: true,
    articles: []
  };

  componentWillMount = async () => {
    try {
      const response = await getTopHeadlines();
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

    return (
      <>
        <ProgressLoader loading={loading} />
        <Container container="true">
          <Categories match={this.props.match} />
          <ArticlesList articles={articles} loading={loading} />
        </Container>
      </>
    );
  }
}

export default Home;

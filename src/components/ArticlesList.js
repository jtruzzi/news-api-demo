import React from "react";
// Components
import { css, keyframes } from "glamor";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Row, Col } from "react-bootstrap";

class ArticlesList extends React.Component {
  imageLoad = (e, url) => {
    if (e.target.src.indexOf("placeholder.gif") !== -1) {
      e.target.src = url;
    }
  };

  render() {
    const { loading, articles } = this.props;

    return (
      <>
        <Row>
          {!loading && articles.length === 0 && (
            <Col xs={12} className={`${noResultsCSs}`}>
              NO RESULTS
            </Col>
          )}
          {loading &&
            [1, 2, 3, 4, 5, 6].map(i => (
              <Col key={i} xs={12} md={4}>
                <div className={`${placeholderCss}`} />
              </Col>
            ))}
          {!loading &&
            articles.map((article, i) => (
              <Col key={i} xs={12} md={4} className={`${transitionCss}`}>
                <Card
                  className={`${cardCss}`}
                  onClick={() => {
                    window.open(article.url, "_blank");
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      height="200"
                      component="img"
                      onLoad={e => {
                        this.imageLoad(e, article.urlToImage);
                      }}
                      image={article.urlToImage || "/images/placeholder.gif"}
                      title={article.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {article.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {article.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Col>
            ))}
        </Row>
      </>
    );
  }
}

const fadein = css.keyframes({
  from: {
    opacity: "0"
  },
  to: {
    opacity: "1"
  }
});

const transitionCss = css({
  animation: `${fadein} 1s`
});

const cardCss = css({
  margin: "10px 0"
});

const noResultsCSs = css({
  textAlign: "center",
  fontSize: "24px"
});

const placeHolderShimmer = keyframes({
  "0%": { backgroundPosition: "-468px 0" },
  "100%": { backgroundPosition: "468px 0" }
});

const placeholderCss = css({
  animationDuration: "1s",
  animationFillMode: "forwards",
  animationIterationCount: "infinite",
  animationName: `${placeHolderShimmer}`,
  animationTimingFunction: "linear",
  background: "linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%)",
  backgroundSize: "800px 104px",
  height: "290px",
  margin: "10px 0",
  width: "100%"
});

export default ArticlesList;

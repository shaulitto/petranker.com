import React, { useContext, useState, useEffect } from 'react';
import HomepageContext from '../../context/context';
import ArticleImg from '../Image/ArticleImg';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { Container } from 'react-bootstrap';

const Articles = () => {
  const { articles } = useContext(HomepageContext);

  const lastCardDeck = articles.slice(12, articles.length);
  console.log(lastCardDeck.length);

  // const [isDesktop, setIsDesktop] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   if (window.innerWidth > 769) {
  //     setIsDesktop(true);
  //     setIsMobile(false);
  //   } else {
  //     setIsMobile(true);
  //     setIsDesktop(false);
  //   }
  // }, []);

  return (
    <section id="articles">
      <Container>
        <div>
          <div id="media-header">
            <h1>Articles</h1>
          </div>
          <CardDeck>
            {articles.slice(0, 3).map((article) => (
              <Card key={article.id} style={{ border: 'transparent' }}>
                <div>
                  <ArticleImg alt="article-preview" filename={article.img} />
                </div>
                <Card.Body>
                  <Card.Title>
                    <a href={article.url} target="_blank">
                      {article.title}
                    </a>
                  </Card.Title>
                  <br />
                </Card.Body>
              </Card>
            ))}
          </CardDeck>
          <CardDeck>
            {articles.slice(3, 6).map((article) => (
              <Card key={article.id} style={{ border: 'transparent' }}>
                <div>
                  <ArticleImg alt="article-preview" filename={article.img} />
                </div>
                <Card.Body>
                  <Card.Title>
                    <a href={article.url} target="_blank">
                      {article.title}
                    </a>
                  </Card.Title>
                </Card.Body>
              </Card>
            ))}
          </CardDeck>
          <CardDeck>
            {articles.slice(6, 9).map((article) => (
              <Card key={article.id} style={{ border: 'transparent' }}>
                <div>
                  <ArticleImg alt="article-preview" filename={article.img} />
                </div>
                <Card.Body>
                  <Card.Title>
                    <a href={article.url} target="_blank">
                      {article.title}
                    </a>
                  </Card.Title>
                </Card.Body>
              </Card>
            ))}
          </CardDeck>
          <CardDeck>
            {articles.slice(9, 12).map((article) => (
              <Card key={article.id} style={{ border: 'transparent' }}>
                <div>
                  <ArticleImg alt="article-preview" filename={article.img} />
                </div>
                <Card.Body>
                  <Card.Title>
                    <a href={article.url} target="_blank">
                      {article.title}
                    </a>
                  </Card.Title>
                </Card.Body>
              </Card>
            ))}
          </CardDeck>
          <CardDeck>
            {lastCardDeck.map((article) => (
              <Card key={article.id} style={{ border: 'transparent' }}>
                <div>
                  <ArticleImg alt="article-preview" filename={article.img} />
                </div>
                <Card.Body>
                  <Card.Title>
                    <a href={article.url} target="_blank">
                      {article.title}
                    </a>
                  </Card.Title>
                </Card.Body>
              </Card>
            ))}
          </CardDeck>
        </div>
      </Container>
    </section>
  );
};

export default Articles;

import React, { useState, useEffect } from 'react'
import { Grid, Row, Col, Panel, Content, AutoComplete } from 'rsuite';
import './Maincontent.css';

const Maincontent = () => {
  const [articles, setArticles] = useState([]);
  const [terms, setTerms] = useState('technology');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `https://api.nytimes.com/svc/topstories/v2/${terms}.json?api-key=ecRbcfdTjD7OHh5DC1XmhColi7AtmhpK`
        );
        const articles = await res.json();
        console.log(articles.results);
        setArticles(articles.results.slice(1, 9));
      } catch (error) {
        console.log(error);
      }
    }
    fetchArticles();

  }, [terms]);

  const handleTermClick = (newTerm) => {
    setTerms(newTerm);
  };

  return (
    <>
      <div className="filtro">
        <h3 onClick={() => handleTermClick('politics')}>Politics</h3>
        <h3 onClick={() => handleTermClick('world')}>World</h3>
        <h3 onClick={() => handleTermClick('sports')}>Sports</h3>
        <h3 onClick={() => handleTermClick('technology')}>Technology</h3>
        <h3 onClick={() => handleTermClick('food')}>Food</h3>
      </div>
      <Grid className='grid' fluid >
        <Row gutter={16}>
          {articles.map((article, index) => (
            <Col xl={6} lg={8} md={8} sm={12} xs={24}>
              <Panel className='panel' key={index} shaded bordered bodyFill style={{ display: 'inline-block', width: AutoComplete }}>
                <img src={article.multimedia[1].url} width='100%' />
                <h5 style={{ padding: 12, paddingBottom: 1 }} > {article.title}</h5>
                <p className='text-container' style={{ padding: 12 }}>
                  <small >{`${article.abstract.slice(0, 190)}`}</small>
                </p>
                <small style={{ padding: 12 }}>{`${article.byline}`}</small>
              </Panel>
            </Col>
          ))}
        </Row>
      </Grid >
    </>
  )
}

export default Maincontent
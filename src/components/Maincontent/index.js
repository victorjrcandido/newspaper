import React, { useState, useEffect } from 'react'
import { Grid, Row, Col, Panel, AutoComplete, Carousel } from 'rsuite';
import './Maincontent.css';

const Maincontent = () => {
  const [articlesCarousel, setArticlesCarousel] = useState([]);
  const [articles, setArticles] = useState([]);
  const [terms, setTerms] = useState('technology');
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = 'ecRbcfdTjD7OHh5DC1XmhColi7AtmhpK';

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `https://api.nytimes.com/svc/topstories/v2/${terms}.json?api-key=${API_KEY}`
        );
        const articles = await res.json();
        setArticles(articles.results.slice(11, 19));
        setArticlesCarousel(articles.results.slice(2, 10));

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
      <div className='cr_background'>
        <div className="carousel">
          <Carousel
            autoplay
            key='top.dot'
            placement='top'
            shape='dot'
            className="custom-slider"
          >
            {articlesCarousel.map((article, index) => (
              <div key={index} className='article-container'>
                <a href={article.short_url} target="_blank">
                  <img key={index} src={article.multimedia[1].url} alt={article.multimedia[1].caption} />
                </a>
                <p>{article.title}</p>
              </div>
            ))}

          </Carousel>
        </div >
        <div className='lorem'>
          <h2>The best place to get your information</h2>
          <p>We offer a unique and informative experience that will awaken your senses to the most relevant events. Keep it up with the world's most important events.</p>
        </div>
      </div >


      <div className="filtro">
        <h3 className={terms === 'science' ? 'underlined' : ''} onClick={() => handleTermClick('science')}>Science</h3>
        <h3 className={terms === 'world' ? 'underlined' : ''} onClick={() => handleTermClick('world')}>World</h3>
        <h3 className={terms === 'sports' ? 'underlined' : ''} onClick={() => handleTermClick('sports')}>Sports</h3>
        <h3 className={terms === 'technology' ? 'underlined' : ''} onClick={() => handleTermClick('technology')}>Technology</h3>
        <h3 className={terms === 'food' ? 'underlined' : ''} onClick={() => handleTermClick('food')}>Food</h3>
      </div>
      <Grid className='grid' fluid >
        <Row gutter={16}>
          {articles.map((article, index) => (
            <Col xl={6} lg={8} md={8} sm={12} xs={24} key={index} className='card'>
              <Panel className='panel' shaded bordered bodyFill style={{ display: 'inline-block', width: AutoComplete }}>
                <a href={article.short_url} target="_blank" rel="noopener noreferrer">
                  <img src={article.multimedia[1].url} width='100%' />
                  <h5 style={{ padding: 12, paddingBottom: 1 }} > {article.title}</h5>
                </a>
                <p className='text-container' style={{ padding: 12 }}>
                  <small >{`${article.abstract.slice(0, 190)}`}</small>
                </p>
                <small style={{ padding: 12 }}>{`${article.multimedia[1].copyright}`}</small>
              </Panel>
            </Col>
          ))}
        </Row>
      </Grid >
    </>
  )
}

export default Maincontent
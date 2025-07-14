import React, { useEffect, useState, useCallback } from 'react';
import NewsItem from '../NewsItem';
import Loading from './Loading';
import PropTypes from 'prop-types';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchNews = useCallback(async (pageNum = page) => {
    setLoading(true);
    const apilink = `/.netlify/functions/fetchNews?category=${props.category}&page=${pageNum}&pageSize=${props.pageSize}`;

    
    try {
      const response = await fetch(apilink);
      const data = await response.json();
      setArticles(data.articles || []);
      setTotalResults(data.totalResults || 0);
    } catch (error) {
      console.error("Failed to fetch news:", error);
    } finally {
      setLoading(false);
    }
  }, [props.category, props.apiKey, props.pageSize, page]);

  useEffect(() => {
    setPage(1);
  }, [props.category]);

  useEffect(() => {
    fetchNews();
    document.title = `Way2GetNews - ${props.category.charAt(0).toUpperCase() + props.category.slice(1)}`;
  }, [props.category, page, fetchNews]);

  const handlePrev = () => {
    if (page > 1) {
      setPage(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (page < Math.ceil(totalResults / props.pageSize)) {
      setPage(prev => prev + 1);
    }
  };

  return (
    <div className="container my-3">
      <h2 className="text-center">Way2GetNews - Top Headlines</h2>
      {loading && <Loading />}
      <div className="d-flex justify-content-center flex-wrap">
        {!loading &&
          articles.map((el) => (
            <div style={{ width: '24rem' }} key={el.url}>
              <NewsItem
                title={el.title || ''}
                description={el.description || 'Click read more to view full article.'}
                newsUrl={el.url}
                imageUrl={el.urlToImage}
                author={el.author}
                date={el.publishedAt}
                source={el.source.name}
              />
            </div>
          ))}
      </div>
      <div className="container d-flex justify-content-between my-3">
        <button
          disabled={page <= 1}
          className="btn btn-primary"
          onClick={handlePrev}
        >
          &larr; Previous
        </button>
        <button
          disabled={page >= Math.ceil(totalResults / props.pageSize)}
          className="btn btn-primary"
          onClick={handleNext}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  pageSize: 1,
  category: 'general',
};

News.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;

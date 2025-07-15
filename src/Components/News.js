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
    const apilink = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${pageNum}&pageSize=${props.pageSize}`;
    
    try {
      const response = await fetch(apilink);
      const data = await response.json();

      if (props.isInfiniteScroll && pageNum > 1) {
        // Append new articles
        setArticles(prev => [...prev, ...(data.articles || [])]);
      } else {
        // Replace articles
        setArticles(data.articles || []);
      }

      setTotalResults(data.totalResults || 0);
    } catch (error) {
      console.error("Failed to fetch news:", error);
    } finally {
      setLoading(false);
    }
  }, [props.category, props.apiKey, props.pageSize, props.isInfiniteScroll, page]);

  useEffect(() => {
    fetchNews();
    document.title = `Way2GetNews - ${props.category.charAt(0).toUpperCase() + props.category.slice(1)}`;
  }, [props.category, page, fetchNews]);

  // ✅ Infinite Scroll Listener
  useEffect(() => {
    if (!props.isInfiniteScroll) return;

    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
        !loading &&
        articles.length < totalResults
      ) {
        setPage(prev => prev + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [props.isInfiniteScroll, loading, articles, totalResults]);

  // 🧹 Reset page on category change
  useEffect(() => {
    setPage(1);
  }, [props.category]);

  return (
    <div className="container my-3">
      <h2 className="text-center">Way2GetNews - Top Headlines</h2>
      {loading && <Loading />}
      <div className="row justify-content-center">
        {articles.map((el, index) => (
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4" key={el.url || index}>
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

      {/* Buttons only if NOT infinite scroll */}
      {!props.isInfiniteScroll && (
        <div className="container d-flex justify-content-between my-3">
          <button
            disabled={page <= 1}
            className="btn btn-primary"
            onClick={() => setPage(prev => prev - 1)}
          >
            &larr; Previous
          </button>
          <button
            disabled={page >= Math.ceil(totalResults / props.pageSize)}
            className="btn btn-primary"
            onClick={() => setPage(prev => prev + 1)}
          >
            Next &rarr;
          </button>
        </div>
      )}
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
  apiKey: PropTypes.string.isRequired,
  isInfiniteScroll: PropTypes.bool.isRequired,
};

export default News;

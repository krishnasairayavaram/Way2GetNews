import React from 'react';
import defaultImage from './Components/unnamed.jpg';

const NewsItem = (props) => {
  return (
    <div
      className="my-3 d-flex justify-content-center align-items-center"
      style={{ minHeight: "70vh" }}
    >
      <div
        className="card shadow"
        style={{
          width: '100%',
          maxWidth: '360px', 
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ position: 'relative' }}>
          <img
            src={!props.imageUrl ? defaultImage : props.imageUrl}
            className="card-img-top"
            alt="news"
            style={{
              height: '180px',
              objectFit: 'cover',
            }}
          />
          <span
            className="badge bg-danger rounded-pill"
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              zIndex: 10,
              fontSize: '0.75rem',
              padding: '5px 8px',
            }}
          >
            {props.source}
          </span>
        </div>

        <div className="card-body" style={{ padding: '0.75rem' }}>
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {props.author || 'Unknown'}
              <br />
              on {props.date ? new Date(props.date).toGMTString() : 'N/A'}
            </small>
          </p>
          <a
            href={props.newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

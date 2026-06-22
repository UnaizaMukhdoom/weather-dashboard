import './NewsCard.css';

function NewsCard({ article }) {
  return (
    <div className="news-card">
      {article.image && (
        <img src={article.image} alt={article.title} />
      )}
      <div className="news-content">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <a href={article.url} target="_blank" rel="noreferrer">
          Read more →
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
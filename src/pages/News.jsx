import { useSearchParams } from 'react-router-dom';
import useNews from '../hooks/useNews';
import SearchBar from '../components/SearchBar';
import NewsCard from '../components/NewsCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import './News.css';

function News() {
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get('topic') || 'technology';

  const { articles, loading, error, retry } = useNews(topic);

  return (
    <div className="news-page">
      <h1>Latest News 📰</h1>

      <SearchBar
        onSearch={(v) => setSearchParams({ topic: v })}
        placeholder="Search news topic..."
      />

      {loading && <Loader />}
      {error   && <ErrorMessage message={error} onRetry={retry} />}

      {!articles.length && !loading && !error && (
        <p className="fallback">🔍 Search a topic to see latest news</p>
      )}

      {articles.length > 0 && !loading && !error && (
        <>
          <p className="results-for">
            Showing results for: <strong>{topic}</strong>
          </p>
          <div className="news-grid">
            {articles.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default News;
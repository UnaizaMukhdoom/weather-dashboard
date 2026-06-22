import useFetch from './useFetch';
import { getNewsUrl } from '../services/api';

function useNews(topic) {
  const { data, loading, error, retry } = useFetch(
    topic ? getNewsUrl(topic) : null
  );

  return { 
    articles: data?.articles || [], 
    loading, 
    error, 
    retry 
  };
}

export default useNews;
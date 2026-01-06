import { useEffect, useState } from 'react';
import './styles.css';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=6';

function FetchData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        if (mounted) setPosts(data);
      })
      .catch((err) => {
        if (mounted) {
          setError(err.message || 'Something went wrong: unable to fetch data');
        }
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="section">
      <h2 className="section-title">Recent Posts</h2>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error message={error} />
      ) : (
        <div className="posts-container">
          {posts.map((p) => (
            <article className="card post-card" key={p.id}>
              <h3>{p.title}</h3>
              <p>
                {p.body.slice(0, 140)}
                {p.body.length > 140 ? '…' : ''}
              </p>
              <div className="tags">
                <span className="tag">Demo</span>
                <small>By User • {Math.floor(Math.random() * 300)} views</small>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default FetchData;

import { useEffect, useState } from 'react';
import './styles.css';

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
        if (mounted) setError(err.message || 'Failed to fetch');
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <p style={{ padding: '1rem' }}>Loading posts…</p>;
  if (error)
    return (
      <p style={{ padding: '1rem', color: 'var(--color-error)' }}>
        Error: {error}
      </p>
    );

  return (
    <section className="section">
      <div className="max-width">
        <h2 className="section-title">Recent Posts</h2>
        <div className="posts-container">
          {posts.map((p) => (
            <article className="post-card" key={p.id}>
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
      </div>
    </section>
  );
}

export default FetchData;

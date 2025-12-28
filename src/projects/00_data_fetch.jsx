import { useEffect, useState } from 'react';

function FetchData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
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
        <h2>Recent Posts</h2>
        <div className="container">
          {posts.map((p) => (
            <article className="card" key={p.id}>
              <h3>{p.title}</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                {p.body.slice(0, 140)}
                {p.body.length > 140 ? '…' : ''}
              </p>
              <div
                style={{
                  marginTop: '0.75rem',
                  display: 'flex',
                  gap: '0.5rem',
                  alignItems: 'center',
                }}
              >
                <span
                  className="tag"
                  style={{
                    backgroundColor: 'var(--color-primary-light)',
                    color: '#fff',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '999px',
                    fontSize: '0.85rem',
                  }}
                >
                  Demo
                </span>
                <small style={{ color: 'var(--color-text-secondary)' }}>
                  By User • {Math.floor(Math.random() * 300)} views
                </small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FetchData;

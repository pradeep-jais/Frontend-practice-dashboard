import './styles.css';

const demoPosts = [
  {
    id: 1,
    title: 'His mother had always taught him',
    excerpt:
      "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto...",
    tags: ['History', 'American', 'Crime'],
    likes: 192,
    dislikes: 25,
    views: 305,
  },
  {
    id: 2,
    title: 'He was an expert but not in a discipline',
    excerpt:
      'He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right...',
    tags: ['French', 'Fiction', 'English'],
    likes: 4884,
    dislikes: 12,
    views: 4884,
  },
];

function BlogCard() {
  return (
    <section className="section">
      <div className="max-width">
        <h2 className="section-title">Blog Post Cards</h2>
        <div className="blog-container">
          {demoPosts.map((post) => (
            <article
              className="card blog-card"
              key={post.id}
              style={{ minWidth: 300 }}
            >
              <header>
                <h3>{post.title}</h3>
                <small style={{ color: 'var(--color-text-secondary)' }}>
                  By User • {post.views} Views
                </small>
              </header>
              <p
                style={{
                  color: 'var(--color-text-secondary)',
                  marginTop: '0.5rem',
                }}
              >
                {post.excerpt}
              </p>
              <div
                style={{
                  marginTop: '0.75rem',
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                }}
              >
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="tag"
                    style={{
                      backgroundColor: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      padding: '0.25rem 0.5rem',
                      borderRadius: 999,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <footer
                style={{
                  marginTop: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ color: 'var(--color-success)' }}>
                    ▲ {post.likes}
                  </span>
                  <span style={{ color: 'var(--color-error)' }}>
                    ▼ {post.dislikes}
                  </span>
                </div>
                <small style={{ color: 'var(--color-text-secondary)' }}>
                  {post.views} Views
                </small>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogCard;

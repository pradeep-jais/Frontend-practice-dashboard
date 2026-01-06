const Error = ({ message }) => {
  return (
    <div className="error-page">
      <span style={{ fontSize: '2rem' }}>😒</span>
      <h2>Error</h2>
      <p>{message}</p>
    </div>
  );
};
export default Error;

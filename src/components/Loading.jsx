const Loading = ({ animation }) => {
  return (
    <div className="loader-container">
      <div className={`loader-${animation || 1}`}></div>
    </div>
  );
};
export default Loading;

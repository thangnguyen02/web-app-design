import "./index.css";
const Loading = ({ isLoading, children }) => {
  return (
    <div className="containerLoading">
      {isLoading && (
        <>
          <div className="loading"></div> <span className="loader"></span>
        </>
      )}
      {children}
    </div>
  );
};

export default Loading;

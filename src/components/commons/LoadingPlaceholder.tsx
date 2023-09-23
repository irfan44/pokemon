const LoadingPlaceholder = () => {
  return (
    <>
      <img
        className="animate-spin"
        src="/pokeball.png"
        alt="Loading"
        width={40}
      />
      <span className="ml-2">Loading...</span>
    </>
  );
};

export default LoadingPlaceholder;

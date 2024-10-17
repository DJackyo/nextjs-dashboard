const SkeletonCounter = () => {
  return (
    <div className="animate-pulse flex flex-col items-center justify-between p-4 shadow-lg rounded-lg w-64 h-64">
    <div className="h-6 bg-gray-300 rounded w-full mb-4"></div>
    <div className="flex items-center justify-center w-24 h-24 bg-gray-300 rounded-full"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4 mt-4"></div>
  </div>
  );
};

export default SkeletonCounter;

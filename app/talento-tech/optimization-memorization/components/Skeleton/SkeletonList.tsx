const SkeletonList = () => {
    return (
      <ul>
        {Array.from({ length: 3 }).map((_, index) => (
          <li key={index} className="animate-pulse p-4 border-b border-gray-200">
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </li>
        ))}
      </ul>
    );
  };
  
  export default SkeletonList;
  
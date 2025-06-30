import React, { useState } from "react";

const EnhancedImage = ({ src, alt, className, containerClassName, showLoader = true }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => setIsLoading(false);
  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const fallbackImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjlGQUZCIi8+CjxwYXRoIGQ9Ik0yMDAgMTAwTDI4MCAyODBIMTIwTDIwMCAxMDBaIiBmaWxsPSIjRTVFN0VCIi8+CjxjaXJjbGUgY3g9IjI4MCIgY3k9IjEyMCIgcj0iMzAiIGZpbGw9IiNFNUU3RUIiLz4KPHR5cGUgZm9udC1mYW1pbHk9InN5c3RlbS11aSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Cjx0ZXh0IHg9IjIwMCIgeT0iMzUwIj5JbWFnZSBVbmF2YWlsYWJsZTwvdGV4dD4KPC90eXBlPgo8L3N2Zz4=';

  return (
    <div className={`relative ${containerClassName}`}>
      {isLoading && showLoader && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      )}
      <img
        src={hasError ? fallbackImage : src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
      {isLoading && !showLoader && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
      )}
    </div>
  );
};

export default EnhancedImage;
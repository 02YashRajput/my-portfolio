import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    const fileUrl = "path/to/yourfile.txt";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "yourfile.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>
      Download File
    </button>
  );
};

export default DownloadButton;

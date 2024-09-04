import React from 'react';
import MyResume from "../utils/MyResume.pdf"
const DownloadButton = () => {
  const handleDownload = () => {
    
    const link = document.createElement("a");
    link.href = MyResume;
    link.download = "YashRajputResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className='lg:text-lg  py-2 px-4 border-[1px] border-gray-200 rounded-lg hover:bg-muted transition-all duration-150' onClick={handleDownload}>
      Download File
    </button>
  );
};

export default DownloadButton;

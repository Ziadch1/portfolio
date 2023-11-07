import React from 'react';

const DownloadPDF = () => {
  const pdfUrl = '/path-to-your-pdf.pdf'; // Update this with the actual path to your PDF file

  const handleDownloadPDF = () => {
    // Create an anchor element and simulate a click event to trigger the download
    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.download = '../Chaouchi Ziad (1).pdf'; // You can specify the filename here
    anchor.click();
  };

  return (
    <div>
      <button onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  );
};

export default DownloadPDF;

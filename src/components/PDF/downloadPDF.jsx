import React from 'react';
import axios from 'axios';

class PDFDownload extends React.Component {

  downloadPDF = () => {
    axios({
      url: "D:\University\TERMSOFUSE.pdf",
      method: 'GET',
      responseType: 'blob',
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'your-pdf-file.pdf');
      document.body.appendChild(link);
      link.click();
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.downloadPDF}>Download PDF</button>
      </div>
    );
  }
}

export default PDFDownload;

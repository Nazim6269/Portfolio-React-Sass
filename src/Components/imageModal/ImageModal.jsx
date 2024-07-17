import html2canvas from 'html2canvas';
import React from 'react';
import './_imageModal.scss';

const ImageModal = ({ imageSrc, onClose }) => {
  const handleDownload = () => {
    html2canvas(document.body).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'screenshot.png';
      link.click();
      onClose();
    });
  };
  return (
    <div className="image-modal">
      <div className="modal-content">
        <img src={imageSrc} alt="Screenshot" />
        <div className="image-modal__btn">
          <button onClick={handleDownload}>Download</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;

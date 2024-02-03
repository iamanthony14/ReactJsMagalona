// BotButton.tsx
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

interface BotButtonProps {
  modalTitle: string;
  modalImageSrc: string;
}

const BotButton: React.FC<BotButtonProps> = ({ modalTitle, modalImageSrc }) => {
    const [show, setShow] = useState(false);
    const [currentImageSrc, setCurrentImageSrc] = useState(modalImageSrc);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    // Function to generate a random image from your library
    const getRandomImage = () => {
      // Replace the following array with your actual array of image paths
      const imageLibrary = [
        '/notes.jpg',
        '/notes2.jpg',
        '/notes3.jpg',
        // Add more image paths as needed
      ];
  
      const randomIndex = Math.floor(Math.random() * imageLibrary.length);
      return imageLibrary[randomIndex];
    };
  
    const handleRandomImage = () => {
      const randomImage = getRandomImage();
      setCurrentImageSrc(randomImage);
      handleShow();
    };
  
    return (
      <>
        <div className="botbutton">
          <button className="clickme" onClick={handleRandomImage}>
            <img className="butimg" src="/msg.svg" alt="" />
          </button>
  
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modalbody'>
              <img className="dailynotes" src={currentImageSrc} alt="" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </>
    );
};

export default BotButton;

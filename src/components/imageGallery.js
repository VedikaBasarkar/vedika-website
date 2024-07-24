import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight, FaTimes, FaSearchPlus } from 'react-icons/fa';

const images = [
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/301',
  'https://via.placeholder.com/302',
  'https://via.placeholder.com/303',
  'https://via.placeholder.com/304',
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setZoom(1);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleZoomIn = () => {
    setZoom(zoom + 0.1);
  };

  const handleZoomOut = () => {
    setZoom(Math.max(1, zoom - 0.1));
  };

  const handlePrev = () => {
    const currentIndex = images.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  return (
    <Container>
      <Gallery>
        {images.map((image, index) => (
          <Thumbnail key={index} src={image} onClick={() => handleImageClick(image)} />
        ))}
      </Gallery>

      {selectedImage && (
        <Lightbox>
          <LightboxContent>
            <CloseButton onClick={handleClose}><FaTimes /></CloseButton>
            <ImageWrapper zoom={zoom}>
              <LightboxImage src={selectedImage} />
            </ImageWrapper>
            <ZoomInButton onClick={handleZoomIn}><FaSearchPlus /></ZoomInButton>
            <ZoomOutButton onClick={handleZoomOut}><FaSearchPlus /></ZoomOutButton>
            <PrevButton onClick={handlePrev}><FaArrowLeft /></PrevButton>
            <NextButton onClick={handleNext}><FaArrowRight /></NextButton>
          </LightboxContent>
        </Lightbox>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
`;

const Thumbnail = styled.img`
  width: 100%;
  cursor: pointer;
`;

const Lightbox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LightboxContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const ImageWrapper = styled.div`
  max-width: 80vw;
  max-height: 80vh;
  overflow: hidden;
  img {
    transform: scale(${props => props.zoom});
    transition: transform 0.3s;
  }
`;

const LightboxImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Button = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: lightgray;
  }
`;

const CloseButton = styled(Button)`
  top: 10px;
  right: 10px;
`;

const ZoomInButton = styled(Button)`
  bottom: 10px;
  right: 50%;
  transform: translateX(50%);
`;

const ZoomOutButton = styled(Button)`
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

const PrevButton = styled(Button)`
  left: 10px;
`;

const NextButton = styled(Button)`
  right: 10px;
`;

export default ImageGallery;

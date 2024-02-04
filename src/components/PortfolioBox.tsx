import React from 'react';

interface PortfolioBoxProps {
  imageSrc: string;
  title: string;
}

const PortfolioBox: React.FC<PortfolioBoxProps> = ({ imageSrc, title }) => {
  return (
    <div className="portfolio-box">
      <img src={imageSrc} alt={title} />
      <div className="portfolio-layer">
        <h4>{title}</h4>
        <p></p>
      </div>
    </div>
  );
};

export default PortfolioBox;

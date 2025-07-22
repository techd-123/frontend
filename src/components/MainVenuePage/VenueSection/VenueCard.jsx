
import styled from "styled-components";
import Slider from "react-slick";
import { FaHeart, FaUsers, FaRupeeSign } from "react-icons/fa";

const Card = styled.div`
  max-width: 280px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const StyledSlider = styled(Slider)`
  .slick-slide img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
`;

const HeartIcon = styled(FaHeart)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 15px;
`;

const Title = styled.h3`
  font-size: 16px;
  margin: 0;
  font-weight: 600;
`;

const Location = styled.p`
  color: #888;
  font-size: 14px;
  margin: 5px 0 10px;
`;

const InfoRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;

  svg {
    margin-right: 4px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: 1px solid #f55;
  color: #f55;
  border-radius: 25px;
  background: none;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background: #f55;
    color: white;
  }
`;

const VenueCard = ({ images, title, location, price, capacity }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Card>
      <ImageWrapper>
        <StyledSlider {...sliderSettings}>
          {images.map((src, index) => (
            <div key={index}>
              <img src={src} alt={`Slide ${index}`} />
            </div>
          ))}
        </StyledSlider>
        <HeartIcon />
      </ImageWrapper>
      <Content>
        <Title>{title}</Title>
        <Location>{location}</Location>
        <InfoRow>
          <FaRupeeSign /> From {price}
          <FaUsers /> {capacity}
        </InfoRow>
        <Button>Request Pricing</Button>
      </Content>
    </Card>
  );
};

export default VenueCard;

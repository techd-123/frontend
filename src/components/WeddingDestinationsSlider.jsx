import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import styled from 'styled-components';
import Slider from 'react-slick';
import { FaUsers, FaMapMarkerAlt } from 'react-icons/fa';


import image1 from "../assets/photos/beach1.jpg";
import image2 from "../assets/photos/heritage.jpg";
import image3 from "../assets/photos/resort.jpg";
// ---------- Styled Components ----------
const Wrapper = styled.div`
  background: #fdfdfd;
  padding: 60px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 40px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  border: 1px solid #ddd;
  padding: 16px;
  max-width: 300px;
  margin: auto;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  transition: 0.3s;

  &:hover {
    transform: translateY(-6px);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 12px;
  object-fit: cover;
`;

const Tag = styled.span`
  display: inline-block;
  background: #ffcc65;
  padding: 6px 14px;
  font-size: 13px;
  color: #333;
  border-radius: 30px;
  margin: 14px 0 10px;
  font-weight: 500;
`;

const ResortName = styled.h3`
  font-size: 18px;
  color: #1f1f4e;
  margin: 10px 0;
`;

const Info = styled.p`
  font-size: 13px;
  color: #444;
  margin: 4px 0;
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: center;
`;

// ---------- Slider Arrow ----------
const ArrowButton = styled.div`
  background: white;
  border: 1px solid #ccc;
  border-radius: 50%;
  padding: 6px;
  position: absolute;
  top: 40%;
  z-index: 1;
  cursor: pointer;

  &:hover {
    background: #eee;
  }
`;

const PrevArrow = ({ onClick }) => (
  <ArrowButton style={{ left: -20 }} onClick={onClick}>‹</ArrowButton>
);
const NextArrow = ({ onClick }) => (
  <ArrowButton style={{ right: -20 }} onClick={onClick}>›</ArrowButton>
);

// ---------- Component ----------
const destinations = [
  {
    tag: 'Premium',
    name: 'The Beach Wedddings',
    capacity: '1000',
    location: 'Kovalam, Thiruvananthapuram',
    image: image1,
  },
  {
    tag: 'Budget friendly',
    name: 'Munnar Hills Resorts',
    capacity: '1500',
    location: 'Munnar Hills, Munnar',
    image: image2,
  },
  {
    tag: 'Popular',
    name: 'Heritage Moments',
    capacity: '1000',
    location: 'Fort Kochi, Kochi',
    image: image3,
  },
];

const WeddingDestinationsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <Title>Popular Wedding Destinations</Title>
      <Slider {...settings}>
        {destinations.map((d, idx) => (
          <Card key={idx}>
            <Img src={d.image} alt={d.name} />
            <Tag>{d.tag}</Tag>
            <ResortName>{d.name}</ResortName>
            <Info><FaUsers /> {d.capacity}, capacity</Info>
            <Info><FaMapMarkerAlt /> {d.location}</Info>
          </Card>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default WeddingDestinationsSlider;

import React from 'react';

import styled from 'styled-components';
import Slider from './Slider';

export default function Carousel() {
  const images = [
    {
      url: 'https://theplanetsworld.com/wp-content3/17-top-rated-tourist-attractions-in-miami.jpg',
      title: 'miami1',
    },
    {
      url: 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99A0C1415B38AA7D1A',
      title: 'miami2',
    },
    {
      url: 'https://mblogthumb-phinf.pstatic.net/MjAxNzEyMDJfODAg/MDAxNTEyMTcwMzc1MDQw.H2nA6MH2xYflPLi-J5BXEa2TMx2RDNpRf3ihEvfAgHwg.fJJSqL1Ijp9oSMcdrou3bzKA3hM9Aq61P73j28jN-nkg.JPEG.mcpopkp/%EB%A7%88%EC%9D%B4%EC%95%A0%EB%AF%B8%EB%8B%A4%EC%9A%B4%ED%83%80%EC%9A%B4.jpg?type=w2',
      title: 'miami3',
    },
    {
      url: 'https://a.cdn-hotels.com/gdcs/production105/d845/998803d7-b594-4416-8800-8d73cb4e1985.jpg',
      title: 'miami4',
    },
    {
      url: 'https://t1.daumcdn.net/cfile/tistory/99B2A43C5C441F452E',
      title: 'miami5',
    },
  ];
  return (
    <S_App>
      <Slider
        onSlideComplete={(i) => {
          console.log('finished dragging, current slide is', i);
        }}
        onSlideStart={(i) => {
          console.log('started dragging on slide', i);
        }}
        activeIndex={0}
        threshHold={100}
        transition={0.5}
        scaleOnDrag={true}
      >
        {images.map(({ url, title }, index) => (
          <img src={url} key={index} alt={title} />
        ))}
      </Slider>
    </S_App>
  );
}

const S_App = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

import React from 'react';
import {
  Slide,
  UnorderedList,
  ListItem,
  Notes,
  Image,
  Appear,
  Heading,
  FlexBox
} from 'spectacle';

const WhatTheCons = (
  <Slide>
    <Appear elementNum={-1}>
      <Heading>
        HAHHA let's use it!
      </Heading>
    </Appear>
    <Appear elementNum={0}>
      <FlexBox>
        <Image
          src={'https://media.giphy.com/media/kEK66eKT7FhPrlDsk6/giphy.gif'}
          width="500px" />
      </FlexBox>
    </Appear>
  </Slide>
);

export default WhatTheCons;
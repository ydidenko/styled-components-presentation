import React from 'react';
import {
  Slide,
  Appear,
  Image,
  Heading,
  FlexBox,
  Notes
} from 'spectacle';

const WhatThePros = (
  <Slide>
    <Appear elementNum={-1}>
      <Heading margin="0px" fontSize="100px">
        Cool but...
        </Heading>
    </Appear>
    
    <Appear elementNum={0}>
      <FlexBox>
        <Image src="/bhutwhaii.jpg" width="400px" />
      </FlexBox>

    </Appear>
    <Appear elementNum={0}>
      <Heading margin="0px" fontSize="100px">
        why would I use that?
      </Heading>
    </Appear>

    <Notes>
      You probably asking yourself 
    </Notes>
  </Slide>
);

export default WhatThePros;
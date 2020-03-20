import React from 'react';
import {
  FlexBox,
  Heading,
  Notes,
  Slide,
} from 'spectacle';

const Opener = (
  <Slide>
    <FlexBox height="100%" flexDirection="column">
      <Heading margin="0px" fontSize="120px">
        styled-components
        </Heading>
      <Heading margin="0px" fontSize="h2">
        CSS-IN-JS WTF
      </Heading>
    </FlexBox>
    <Notes>
      <p>
        Notes are shown in presenter mode. Open up
        localhost:3000/?presenterMode=true to see them.
        </p>
    </Notes>
  </Slide>
)

export default Opener;
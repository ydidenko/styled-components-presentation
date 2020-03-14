import React, { useState, useEffect } from 'react';
import {
  Appear,
  Box,
  CodePane,
  CodeSpan,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  Image,
  ListItem,
  Markdown,
  Notes,
  OrderedList,
  Progress,
  Slide,
  SpectacleLogo,
  Stepper,
  Text,
  UnorderedList,
  indentNormalizer
} from 'spectacle';
import reader from 'txt-reader';

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
};

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

function App() {
  // const [ready, setReady] = useState(false);
  // const [codechunks, setCodechunks] = useState([]);
  // const loadChunks = async () => {
  //   const chunks = await Promise.all([
  //     reader.loadFile('./codechunks/flatten')
  //   ]);
  //   setCodechunks(chunks.map(text => indentNormalizer(text)));
  //   setReady(true);
  // }
  // useEffect(() => {
  //   loadChunks();
  // }, []);

  // if (!ready) return null;

  // const [flatten] = codechunks;

  // console.log(flatten);

  return (
    <Deck theme={theme} template={template} transitionEffect="fade">
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
      <Slide>
        <Heading>How does it look?</Heading>
        {/* <Stepper>

        </Stepper> */}
      </Slide>
    </Deck>
  );
}

export default App;

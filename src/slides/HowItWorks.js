import React from 'react';
import {
  Box,
  CodePane,
  Heading,
  Slide,
  Stepper,
  Text,
  indentNormalizer,
  Notes
} from 'spectacle';
// eslint-disable-next-line
import flattenSrc from '!!raw-loader!codechunks/flatten';

const flatten = indentNormalizer(flattenSrc);

const HowItWorks = (
  <Slide>
    <Heading>How does it work?</Heading>
    <Stepper
      defaultValue={[4, 9]}
      values={[
        [1, 3],
        [4, 9],
        [11, 18],
        [63, 63],
        [64, 64],
        [67, 73],
        [87, 90],
        [113, 113]
      ]}
    >
      {(value, step) => (
        <Box position="relative">
          <CodePane
            highlightStart={value[0]}
            highlightEnd={value[1]}
            fontSize={18}
            language="javascript"
            autoFillHeight
          >
            {flatten}
          </CodePane>

          <Box
            position="absolute"
            left="0rem"
            right="0rem"
            bg="rgba(0, 0, 0, .5)"
          >
            {step === -1 && (
              <Text fontSize="1.5rem" margin="0rem">
                So why can we write that?
              </Text>
            )}

            {step === 0 && (
              <Text fontSize="1.5rem" margin="0rem">
                Tagged template strings
              </Text>
            )}

            {step === 1 && (
              <Text fontSize="1.5rem" margin="0rem">
                Tagged template strings
              </Text>
            )}

            {step === 2 && (
              <Text fontSize="1.5rem" margin="0rem">
                Output
              </Text>
            )}

            {step === 3 && (
              <Text fontSize="1.5rem" margin="0rem">
                 Here we go to the source
              </Text>
            )}
          </Box>
        </Box>
      )}
    </Stepper>
    <Notes>
      If a template string is preceded by an expression 
      it is considered a tagged template string. 
      The expression before the template string 
      is called with the parsed template string.

      
    </Notes>
  </Slide>
);

export default HowItWorks;
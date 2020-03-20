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
import looksSrc from '!!raw-loader!codechunks/looks';

const looks = indentNormalizer(looksSrc);

const HowItLooks = (
  <Slide>
    <Heading>How does it look?</Heading>
    <Stepper
      defaultValue={[2, 2]}
      values={[
        [4, 4],
        [4, 17],
        [6, 9],
        [14, 16],
        [19, 31]
      ]}
    >
      {(value, step) => (
        <Box position="relative">
          <CodePane
            highlightStart={value[0]}
            highlightEnd={value[1]}
            fontSize={18}
            language="js"
            autoFillHeight
          >
            {looks}
          </CodePane>

          <Box
            position="absolute"
            bottom="0rem"
            left="0rem"
            right="0rem"
            bg="black"
          >
            {step === -1 && (
              <Text fontSize="1.5rem" margin="0rem">
                Import
              </Text>
            )}

            {step === 0 && (
              <Text fontSize="1.5rem" margin="0rem">
                Choose an element
              </Text>
            )}

            {step === 1 && (
              <Text fontSize="1.5rem" margin="0rem">
                Write your usual CSS
              </Text>
            )}

            {step === 2 && (
              <Text fontSize="1.5rem" margin="0rem">
                Use the same units
              </Text>
            )}

            {step === 3 && (
              <Text fontSize="1.5rem" margin="0rem">
                Media querries
              </Text>
            )}

            {step === 4 && (
              <Text fontSize="1.5rem" margin="0rem">
                Use it as React component
              </Text>
            )}
          </Box>
        </Box>
      )}
    </Stepper>
    <Notes>
      So the concept itself is relatively easy

      be brave be crazy have fun
    </Notes>
  </Slide>
);

export default HowItLooks;
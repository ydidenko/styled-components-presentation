import React from 'react';
import {
  Slide,
  Notes,
  Stepper,
  Box,
  Text,
  CodePane,
  indentNormalizer
} from 'spectacle';
// eslint-disable-next-line
import prosSrc from '!!raw-loader!codechunks/pros';
const pros = indentNormalizer(prosSrc);



const Why = (
  <Slide>
    <Stepper
      defaultValue={[4, 10]}
      values={[
        [12, 16], //0
        [18, 22],
        [24, 32],
        [34, 36], // 4 spin right round
        [38, 45], // 5 theme
        [47, 49], // 6
        [51, 58], // 7 app themed
        [61, 64], // 8 theme toggle
        [66, 73], // 9
        [76, 84], // 10 global css
        [86, 88], // 11 theme global
        [94, 94], // 12 global tag
        [104, 106], // 13 types
        [108, 110], // 14
        [112, 114], // 15
        [117, 126] // 16 test it
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
            {pros}
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
                It's alive!
              </Text>
            )}

            {step === 1 && (
              <Text fontSize="1.5rem" margin="0rem">
                Extend it? 🤔ok
              </Text>
            )}

            {step === 2 && (
              <Text fontSize="1.5rem" margin="0rem">
                Move it!
              </Text>
            )}

            {step === 3 && (
              <Text fontSize="1.5rem" margin="0rem">
                Flo Rida sampling Right Round was the worst that happened in 2009
              </Text>
            )}

            {step === 4 && (
              <Text fontSize="1.5rem" margin="0rem">
                Plain object
              </Text>
            )}

            {step === 5 && (
              <Text fontSize="1.5rem" margin="0rem">
                THEME IT
              </Text>
            )}

            {step === 8 && (
              <Text fontSize="1.5rem" margin="0rem">
                Submit to the darkness
              </Text>
            )}

            {step === 9 && (
              <Text fontSize="1.5rem" margin="0rem">
                Old ways
              </Text>
            )}

            {step === 10 && (
              <Text fontSize="1.5rem" margin="0rem">
                But with a pinch of new
              </Text>
            )}

            {step === 13 && (
              <Text fontSize="1.5rem" margin="0rem">
                I know you want it
              </Text>
            )}

            {step === 16 && (
              <Text fontSize="1.5rem" margin="0rem">
                Please test it
              </Text>
            )}
          </Box>
          <Text>

          </Text>
        </Box>
      )}
    </Stepper>
    <Notes>
      * it's javascript and css really
      that means you that most of the times
      you can find your way intiitively
      but at the same time it removes pure css pains as well as pure js pains
      *
    </Notes>
  </Slide>
);

export default Why;
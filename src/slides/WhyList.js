import React from 'react';
import {
  Slide,
  UnorderedList,
  ListItem,
  Notes,
  Appear
} from 'spectacle';

const Why = (
  <Slide>
    <UnorderedList>
      <Appear elementNum={0}>
        <ListItem>
          Automatic critical CSS
        </ListItem>
      </Appear>
      <Appear elementNum={1}>
        <ListItem>
          It is scoped
        </ListItem>
      </Appear>
      <Appear elementNum={2}>
        <ListItem>
          Easier deletion of css and dead code elimination
        </ListItem>
      </Appear>
      <Appear elementNum={3}>
        <ListItem>
          Simpler maitanance 
        </ListItem>
      </Appear>
      <Appear elementNum={4}>
        <ListItem>
          Automatic vendor prefixing
        </ListItem>
      </Appear>
      <Appear elementNum={4}>
        <ListItem>
          It is growing
        </ListItem>
      </Appear>
    </UnorderedList>

    <Notes>
      * Automatic critical CSS: styled-components keeps track
      of which components are rendered on a page
      and injects their styles and nothing else, fully automatically.
      Combined with code splitting, this means your
      users load the least amount of code necessary.

      * No class name collisions and bugs
      Don't worry about duplication, overlap or misspellings

      * Easier deletion of CSS
      css goes away along with deleted component

      * Simpler maitanance 
      you never have to hunt across different 
      files to find the styling affecting your component

      * Automatic vendor prefixing
      handles all the prefixing

      * It is growing
      adoption is pretty high. AirBnb, invision, blablacar
      a lot of libraries can be easily integrated with styled components
    </Notes>
  </Slide>
);

export default Why;
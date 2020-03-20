import React from 'react';
import {
  Slide,
  UnorderedList,
  ListItem,
  Notes,
  Appear,
  Heading
} from 'spectacle';

const Why = (
  <Slide>
    <Heading>So what's wrong?</Heading>
    <UnorderedList>
      <Appear elementNum={0}>
        <ListItem>
          It's a pain in the ass to switch
        </ListItem>
      </Appear>
      <Appear elementNum={1}>
        <ListItem>
          There's a learning curve, but not too steep
        </ListItem>
      </Appear>
      <Appear elementNum={2}>
        <ListItem>
          Opinionated
        </ListItem>
      </Appear>
      <Appear elementNum={3}>
        <ListItem>
          Another library? Common!
        </ListItem>
      </Appear>
      <Appear elementNum={4}>
        <ListItem>
          Everything can and will go wrong if you don't know how to do it
        </ListItem>
      </Appear>
    </UnorderedList>

    <Notes>
      * It's a pain in the ass to switch
      
    </Notes>
  </Slide>
);

export default Why;
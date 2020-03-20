import React, { useState, useEffect } from 'react';
import {
  Deck,
  Slide,
} from 'spectacle';

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
};

const slideImports = [
  import('slides/Opener'),
  import('slides/HowItLooks'),
  import('slides/HowItWorks'),
  import('slides/WhatThePros'),
  import('slides/Why'),
  import('slides/WhyList'),
  import('slides/WhatTheCons'),
  import('slides/WhyNoList'),
  import('slides/End')
]

function App() {
  const [slides, setSlides] = useState(Array(slideImports.length).fill(<Slide key="loading" />));

  const loadSlides = async () => {
    const loaded = await Promise.all(slideImports);
    setSlides(loaded.map(slide => slide.default));
  }

  useEffect(() => {
    loadSlides();
  }, []);

  return (
    <Deck theme={theme} transition="fade">
      {
        slides.map((slide, index) => {
          return React.cloneElement(slide, { key: index });
        })
      }
    </Deck>
  );
}

export default App;

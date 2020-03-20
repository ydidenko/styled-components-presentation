import React, { useState } from 'react';
import styled, { css, ThemeProvider, createGlobalStyle, keyframes } from 'styled-components';

const Button = styled.button`
  width: 300px;
  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
`;

export const ExistentialButton = () => (
  <>
    <Button primary>What's my purpose, creator? :(</Button>
  </>
)

//We won't use it, it's kinda weird
const RetardedButton = styled(Button)`
  background: url('/poopies.jpg');
  width: 100vw;
`;

const RightRound = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const YouSpinMyHead = styled(Button)`
  animation: ${RightRound} 2s linear infinite;
`;

const theme = {
  colors: {
    primary: 'red',
    notAsPrimary: 'blue',
    weDontLikeThisColor: 'yourcolor',
    codeColor: 'black'
  }
};

const ThemedButton = styled(Button)`
  ${({ theme }) => theme.colors.primary};
`;

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <YouSpinMyHead/>
      <ThemedButton>I'm mr.Button look at me!</ThemedButton>
    </ThemeProvider>
  )
}

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
      <YouSpinMyHead/>
      <ThemedButton onClick={toggleDarkMode}>
        Pay attention to the presentation please 🤨
      </ThemedButton>
    </ThemeProvider>
  )
}

const GlobalCss = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    ${({ theme }) => theme.colors.codeColor}
  }
`;

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <YouSpinMyHead/>
      <ThemedButton onClick={toggleDarkMode}>
        Are you following any of this?
      </ThemedButton>
    </ThemeProvider>
  )
}


interface TitleProps {
  readonly isActive: boolean;
};

const Title = styled.h1<TitleProps>`
  color: ${({ theme }) => props.isActive ? theme.colors.main : theme.colors.secondary};
`

const NewHeader = styled(Header) <{ customColor: string }>`
  color: ${props => props.customColor};
`


import 'jest-styled-components';

test('it works', () => {
  const tree = renderer.create(<Button />).toJSON()
  expect(tree).toHaveStyleRule('color', 'red')
  expect(tree).toHaveStyleRule('color', 'green', {
    media: '(max-width: 640px)',
    modifier: ':hover',
  })
})
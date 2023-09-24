import { Container, Heading } from '@chakra-ui/react';
import data from './data/games.json';
import GamesList from './components/GamesList';

function App() {
  const games = data;

  return (
    <>
      <Container size={['md', 'sm']}>
        <Heading>Games Tracker</Heading>
        <GamesList games={games} />
      </Container>
    </>
  );
}

export default App;

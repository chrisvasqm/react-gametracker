import { Container, Heading } from '@chakra-ui/react';
import GameCard from './components/GameCard';
import data from './data/games.json';

function App() {
  const games = data;

  return (
    <>
      <Container size={['md', 'sm']}>
        <Heading>Games Tracker</Heading>

        <GameCard game={games[0]} />
      </Container>
    </>
  );
}

export default App;

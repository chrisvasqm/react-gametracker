import { Box, Heading, Text } from '@chakra-ui/react';
import Game from '../models/Game';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Box
      padding={6}
      width={'100%'}
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      boxShadow='xl'
    >
      <Heading>{game.name}</Heading>
      <Text>{game.description}</Text>
    </Box>
  );
}

export default GameCard;

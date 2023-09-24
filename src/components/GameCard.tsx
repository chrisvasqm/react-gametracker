import { Box, Heading, Image, Text } from '@chakra-ui/react';
import Game from '../models/Game';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Box width={'100%'} borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow='xl'>
      <Image src={game.image} width={'100%'} objectFit={'cover'} height={'200px'} />
      <Box padding={6}>
        <Heading>{game.name}</Heading>
        <Text>{game.description}</Text>
      </Box>
    </Box>
  );
}

export default GameCard;

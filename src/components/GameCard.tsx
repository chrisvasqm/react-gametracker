import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import Game from '../models/Game';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Box
      marginY={4}
      width={'100%'}
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      boxShadow='xl'
    >
      <Box position='relative'>
        <Image src={game.image} width={'100%'} objectFit={'cover'} height={'200px'} />
        <Box
          padding={0}
          position='absolute'
          bottom='0'
          left='0'
          width='100%'
          backgroundImage='linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))'
          display='flex'
          gap={2}
          justifyContent='start'
          alignItems='center'
        >
          <Button variant='solid' colorScheme='teal'>
            Playing
          </Button>
          <Button variant='solid' colorScheme='teal'>
            Backlog
          </Button>
          <Button variant='solid' colorScheme='teal'>
            Beaten
          </Button>
        </Box>
      </Box>
      <Box padding={6}>
        <Heading>{game.name}</Heading>
        <Text>{game.description}</Text>
      </Box>
    </Box>
  );
}

export default GameCard;

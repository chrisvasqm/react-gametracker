import Game from '../models/Game';
import GameCard from './GameCard';

interface Props {
  games: Game[];
}

function GamesList({ games }: Props) {
  if (games.length === 0) return <p>No tasks to show.</p>;

  return <>{games && games.map(game => <GameCard game={game} />)}</>;
}

export default GamesList;

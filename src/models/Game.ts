export default interface Game {
  id: number;
  name: string;
  description: string;
  image: string;
  isPlaying: boolean;
  isBeaten: boolean;
  isBacklogged: boolean;
}

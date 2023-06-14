import { useRouter } from "next/router";

const Game = () => {
  const router = useRouter();
  const { platform, game } = router.query;
  return (
    <div>
      <h1>
         Estamos en el juego: {game}
      </h1>
    </div>
  )
}

export default Game;
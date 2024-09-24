class Pokemon {
  id: number;
  pokedexNumber: number;
  name: string;
  type: PokemonType[];
  stats: MsgBaseStats;
  fastMoves: FastMove[];
  chargeMoves: ChargeMove[];

  constructor(
    id: number,
    pokedexNumber: number,
    name: string,
    type: PokemonType[],
    stats: MsgBaseStats,
    fastMoves: FastMove[],
    chargeMoves: ChargeMove[]
  ) {
    this.id = id;
    this.pokedexNumber = pokedexNumber;
    this.name = name;
    this.type = type;
    this.stats = stats;
    this.fastMoves = fastMoves;
    this.chargeMoves = chargeMoves;
  }
}

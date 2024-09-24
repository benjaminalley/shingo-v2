class FastMove {
  id: number;
  name: string;
  type: PokemonType;
  energyDelta: number;
  damage: number;
  duration: number;

  constructor(
    id: number,
    name: string,
    type: PokemonType,
    energyDelta: number,
    damage: number,
    duration: number
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.energyDelta = energyDelta;
    this.damage = damage;
    this.duration = duration;
  }

  get damagePerEnergy(): number {
    return this.energyDelta !== 0 ? this.damage / this.energyDelta : 0;
  }
}
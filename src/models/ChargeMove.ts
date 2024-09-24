class ChargeMove {
  id: number;
  name: string;
  type: PokemonType;
  energyDelta: number;
  damage: number;

  constructor(
    id: number,
    name: string,
    type: PokemonType,
    energyDelta: number,
    damage: number
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.energyDelta = energyDelta;
    this.damage = damage;
  }

  get damagePerEnergy(): number {
    return this.energyDelta !== 0 ? this.damage / this.energyDelta : 0;
  }
}
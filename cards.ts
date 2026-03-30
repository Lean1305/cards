export enum Farbe {
  Rosen = 0,
  Schellen = 1,
  Schilten = 2,
  Eicheln = 3,
}

export enum Wert {
  Ass = 0,
  Koenig = 1,
  Ober = 2,
  Under = 3,
  Banner = 4,
  Neun = 5,
  Acht = 6,
  Sieben = 7,
  Sechs = 8,
}

export class Card {
  constructor(public readonly farbe: Farbe, public readonly wert: Wert) {}

  beats(other: Card): boolean {
    if (this.wert !== other.wert) {
      // Lower enum value = higher rank
      return this.wert < other.wert;
    }

    // Same value → compare Farbe
    // Schellen (1) and Schilten (2) are equal → false
    const schellen = Farbe.Schellen;
    const schilten = Farbe.Schilten;
    if (
      (this.farbe === schellen || this.farbe === schilten) &&
      (other.farbe === schellen || other.farbe === schilten)
    ) {
      return false;
    }

    // Lower enum value = higher rank (Rosen=0 beats all)
    return this.farbe < other.farbe;
  }
}
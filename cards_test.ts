import { assertEquals } from "jsr:@std/assert";
import { Card, Farbe, Wert } from "./cards.ts";

Deno.test("Ass beats König", () => {
  const ass = new Card(Farbe.Rosen, Wert.Ass);
  const koenig = new Card(Farbe.Rosen, Wert.Koenig);
  assertEquals(ass.beats(koenig), true);
  assertEquals(koenig.beats(ass), false);
});

Deno.test("Same value: Rosen beats Eicheln", () => {
  const rosen = new Card(Farbe.Rosen, Wert.Ober);
  const eicheln = new Card(Farbe.Eicheln, Wert.Ober);
  assertEquals(rosen.beats(eicheln), true);
});

Deno.test("Same value: Schellen vs Schilten → false", () => {
  const schellen = new Card(Farbe.Schellen, Wert.Banner);
  const schilten = new Card(Farbe.Schilten, Wert.Banner);
  assertEquals(schellen.beats(schilten), false);
  assertEquals(schilten.beats(schellen), false);
});

Deno.test("Identical cards → false", () => {
  const a = new Card(Farbe.Rosen, Wert.Ass);
  const b = new Card(Farbe.Rosen, Wert.Ass);
  assertEquals(a.beats(b), false);
});
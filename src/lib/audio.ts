import { Howl } from "howler";

export const click = new Howl({
  src: ["/audio/click.mp3"],
  volume: 0.5,
});

export const ambient = new Howl({
  src: ["/audio/ambient.mp3"],
  loop: true,
  volume: 0.3,
});
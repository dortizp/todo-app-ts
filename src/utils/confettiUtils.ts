const confetti = require("canvas-confetti");

interface ConfettiOptions {
  particleCount?: number;
  spread?: number;
}

export function cheers(): void {
  console.log('cheers!');
  const canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettiConfig: ConfettiOptions = {
    particleCount: 100,
    spread: 90,
  };

  const throwConfetti = confetti.create(canvas, confettiConfig);
  throwConfetti();
}

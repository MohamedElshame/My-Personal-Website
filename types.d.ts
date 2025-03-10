// Global type declarations

// Fix for JSX.IntrinsicElements missing
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// Fix for NodeJS namespace
declare namespace NodeJS {
  interface Timeout {}
}

// Declare Particle type
declare interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  update(deltaTime: number, mouseX?: number, mouseY?: number): void;
  draw(ctx: CanvasRenderingContext2D): void;
}

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

// For missing module declarations - explicitly define the missing exports
declare module 'react' {
  // Export all the React types we need with proper generic support
  export function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prevState: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: readonly any[]): void;
  export function useRef<T>(initialValue: T): { current: T };
  export type ReactNode = any;
  export type FC<P = {}> = React.FunctionComponent<P>;
  export interface FunctionComponent<P = {}> {
    (props: P): React.ReactElement | null;
  }
  export type ReactElement = any;
}

declare module 'framer-motion' {
  // Export the framer-motion types we need
  export const motion: any;
  export const AnimatePresence: any;
}

declare module 'react-icons/fa' {
  import React from 'react';
  
  export type IconType = React.ComponentType<{
    size?: string | number;
    color?: string;
    className?: string;
  }>;
  
  export const FaFacebook: IconType;
  export const FaInstagram: IconType;
  export const FaGithub: IconType;
  export const FaLinkedin: IconType;
  export const FaTwitter: IconType;
  export const FaTiktok: IconType;
  export const FaMedium: IconType;
}

// Animation component types
declare interface AnimationProps {
  onComplete: () => void;
}

// Create placeholder declarations for animation components
declare module './components/animations/FacebookAnimation' {
  export const FacebookAnimation: React.FC<AnimationProps>;
}

declare module './components/animations/InstagramAnimation' {
  export const InstagramAnimation: React.FC<AnimationProps>;
}

declare module './components/animations/GithubAnimation' {
  export const GithubAnimation: React.FC<AnimationProps>;
}

declare module './components/animations/LinkedInAnimation' {
  export const LinkedInAnimation: React.FC<AnimationProps>;
}

declare module './components/animations/TikTokAnimation' {
  export const TikTokAnimation: React.FC<AnimationProps>;
}

declare module './components/animations/MediumAnimation' {
  export const MediumAnimation: React.FC<AnimationProps>;
}

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add throttle function for performance optimization
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): (...args: Parameters<T>) => ReturnType<T> | undefined {
  let inThrottle = false
  let lastResult: ReturnType<T> | undefined

  return function (this: any, ...args: Parameters<T>): ReturnType<T> | undefined {
    if (!inThrottle) {
      lastResult = func.apply(this, args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
    return lastResult
  }
}

// Add debounce function for performance optimization
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return function (this: any, ...args: Parameters<T>): void {
    const later = () => {
      timeout = null
      func.apply(this, args)
    }

    if (timeout !== null) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait)
  }
}

// Add image optimization helper
export function getOptimizedImageUrl(url: string, width: number, quality = 80): string {
  // This is a placeholder function - in a real app, you'd use your image optimization service
  if (url.startsWith("http")) {
    // For external images, you might use a service like Imgix, Cloudinary, etc.
    return url
  }

  // For local images
  return `${url}?w=${width}&q=${quality}`
}


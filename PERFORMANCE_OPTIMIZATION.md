# Performance Optimization Guide

This guide provides recommendations to ensure your animated personal website performs well across all devices and network conditions.

## Animation Optimization

### 1. Optimize Framer Motion Animations

- **Use the `layoutId` prop** for smoother transitions between elements that change position
- **Apply `useReducedMotion` hook** to respect user preferences:

```jsx
import { useReducedMotion } from "framer-motion";

function MyAnimation() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      animate={{ 
        // Use simpler animations when reduced motion is preferred
        scale: shouldReduceMotion ? 1.05 : 1.2,
        // Avoid transitions that could cause discomfort
        rotate: shouldReduceMotion ? 0 : 360
      }}
    />
  );
}
```

### 2. Canvas Performance

For the `BackgroundAnimation` component:

- **Limit the number of particles** based on device capability:

```jsx
// In BackgroundAnimation.tsx
const maxParticles = window.innerWidth < 768 ? 50 : 100;
```

- **Reduce animation complexity** on mobile devices:

```jsx
const updateRate = window.innerWidth < 768 ? 30 : 60; // fps
```

### 3. Image Optimization

- Use Next.js Image component for all images
- Implement lazy loading for off-screen images
- Use appropriate image formats (WebP, AVIF) with fallbacks

## Code Splitting and Loading Optimization

### 1. Implement Dynamic Imports

```jsx
// Instead of static imports for animation components
import dynamic from 'next/dynamic';

const TikTokAnimation = dynamic(
  () => import('./animations/TikTokAnimation').then(mod => mod.TikTokAnimation),
  { ssr: false, loading: () => <LoadingPlaceholder /> }
);
```

### 2. Add Loading States

Create lightweight loading states for animations while they're being loaded:

```jsx
function LoadingPlaceholder() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="animate-pulse bg-gray-200 rounded-lg h-20 w-20"></div>
    </div>
  );
}
```

## User Experience Optimizations

### 1. Implement Progressive Enhancement

- Show core content first
- Load animations after essential content
- Use transitions to smooth the experience

### 2. Add Preloading for Critical Resources

```jsx
// In your _document.js or _app.js
<link rel="preload" href="/fonts/yourfont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
```

### 3. Add Animation Toggle for Users

Consider adding an option for users to disable animations:

```jsx
function AnimationToggle({ onChange, initialState = true }) {
  const [enabled, setEnabled] = useState(initialState);
  
  const handleChange = () => {
    const newState = !enabled;
    setEnabled(newState);
    onChange(newState);
  };
  
  return (
    <button 
      onClick={handleChange}
      className="text-sm text-gray-500 hover:text-gray-700"
    >
      {enabled ? 'Disable' : 'Enable'} animations
    </button>
  );
}
```

## Performance Monitoring

### 1. Implement Web Vitals Monitoring

```jsx
// In _app.js
export function reportWebVitals(metric) {
  console.log(metric);
  
  // You can send to your analytics platform
  if (window.gtag) {
    window.gtag('event', metric.name, {
      value: metric.value,
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }
}
```

### 2. Set Performance Budgets

Create a budget for your performance metrics:

- First Contentful Paint (FCP) < 1.8s
- Largest Contentful Paint (LCP) < 2.5s
- First Input Delay (FID) < 100ms
- Cumulative Layout Shift (CLS) < 0.1

## Device Testing

### 1. Test on Various Devices

- Desktop (various screen sizes)
- Mobile devices (iOS and Android)
- Tablets
- Low-powered devices

### 2. Network Throttling Tests

Test your site under various network conditions:
- Fast 3G
- Slow 3G
- Offline (with service worker)

## Additional Optimizations

### 1. Add a Service Worker

Implementing a service worker can improve performance for returning users:

```bash
# Install Workbox
npm install workbox-webpack-plugin --save-dev
```

### 2. Use Intersection Observer for On-Screen Animations

Only animate elements when they're visible on screen:

```jsx
import { useInView } from 'react-intersection-observer';

function AnimateOnScroll() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      Content that animates when visible
    </motion.div>
  );
}
```

## Browser Support

Ensure animations degrade gracefully in older browsers:
- Use feature detection
- Provide fallbacks for browsers that don't support certain animations
- Test in IE11, older Safari, and Firefox versions

## Conclusion

By implementing these optimizations, your animated personal website should provide a smooth, engaging experience for users across all devices and network conditions, while still maintaining the creative and interactive elements that make it unique.

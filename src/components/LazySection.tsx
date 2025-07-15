import { lazy, Suspense, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
}

const LazySection = ({ children, fallback = <div className="h-32 animate-pulse bg-neutral-100 rounded-lg" /> }: LazySectionProps) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export default LazySection;
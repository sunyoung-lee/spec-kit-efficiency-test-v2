import { motion } from 'framer-motion';

interface SkeletonCardProps {
  index: number;
}

export function SkeletonCard({ index }: SkeletonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="min-h-[280px] rounded-xl overflow-hidden bg-white shadow-md"
    >
      {/* Thumbnail skeleton */}
      <div
        className="aspect-video bg-gray-200 rounded animate-pulse"
        style={{ animationDelay: `${index * 100}ms` }}
      />
      {/* Content skeleton */}
      <div className="p-4 space-y-3">
        <div
          className="h-5 bg-gray-200 rounded animate-pulse w-3/4"
          style={{ animationDelay: `${index * 100}ms` }}
        />
        <div
          className="h-4 bg-gray-200 rounded animate-pulse w-full"
          style={{ animationDelay: `${index * 100}ms` }}
        />
        <div
          className="h-4 bg-gray-200 rounded animate-pulse w-2/3"
          style={{ animationDelay: `${index * 100}ms` }}
        />
        <div className="flex gap-2 pt-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

import { motion } from 'framer-motion';

interface ErrorFallbackProps {
  error: Error;
  onReset: () => void;
}

export function ErrorFallback({ error, onReset }: ErrorFallbackProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="flex items-center justify-center min-h-[50vh]"
    >
      <div className="text-center max-w-[400px] p-12">
        <div className="text-5xl mb-4" role="img" aria-label="warning">
          ⚠️
        </div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          데이터를 불러올 수 없습니다
        </h2>
        <p className="text-sm text-gray-500 mb-6">{error.message}</p>
        <button
          type="button"
          onClick={onReset}
          className="bg-blue-500 text-white rounded-lg px-6 py-2 hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          다시 시도
        </button>
      </div>
    </motion.div>
  );
}

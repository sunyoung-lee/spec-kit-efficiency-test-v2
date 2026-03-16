import { motion } from "framer-motion";

export function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-16"
    >
      <p className="text-4xl mb-4">🔍</p>
      <h3 className="text-xl font-semibold text-slate-300 mb-2">
        프로젝트를 찾을 수 없습니다
      </h3>
      <p className="text-slate-500">다른 카테고리를 선택해보세요.</p>
    </motion.div>
  );
}

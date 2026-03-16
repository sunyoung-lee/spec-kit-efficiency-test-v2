import { GalleryGrid } from '../features/gallery/ui/GalleryGrid';

export function App() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="px-6 py-6">
        <h1 className="text-2xl font-bold text-gray-900">Agentic Dynamic Showcase</h1>
        <p className="text-sm text-gray-500 mt-1">프로젝트 갤러리를 둘러보세요</p>
      </header>
      <GalleryGrid />
    </main>
  );
}

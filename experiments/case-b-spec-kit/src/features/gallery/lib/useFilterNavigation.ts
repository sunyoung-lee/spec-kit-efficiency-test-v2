import { useCallback } from 'react';
import { useScrollSpy } from './useScrollSpy';

interface UseFilterNavigationOptions {
  sectionIds: string[];
}

export function useFilterNavigation({ sectionIds }: UseFilterNavigationOptions) {
  const activeSection = useScrollSpy({ sectionIds });

  const navigateTo = useCallback((sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return { navigateTo, activeSection };
}

import { useQuery } from '@tanstack/react-query';
import { mockProjects } from './mockData';

export const useProjects = () =>
  useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 1500));
      return mockProjects;
    },
    staleTime: Infinity,
  });

export const useProjectById = (id: string) =>
  useQuery({
    queryKey: ['project', id],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 500));
      const project = mockProjects.find((p) => p.id === id);
      if (!project) throw new Error('프로젝트를 찾을 수 없습니다.');
      return project;
    },
    enabled: !!id,
  });

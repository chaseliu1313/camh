import { useState, useEffect } from 'react';

// custom hook for setting page routes in the resources/tools page

export const headings = [
  'Tools',
  'Short Animated Videos for Youth',
  'Mood Foundations Package for Youth',
  'Medication Handout for Youth',
  'Problem Solving Worksheets',
  'Cognitive Restructuring Worksheets',
  'Short Animated Videos for Primary Care Providers',
  'Quick Guide to the RCADS',
  'Assessment Tools',
  'Special Populations and Considerations',
];
//default
const pathDefault = ['/treatment', '/resources/tools/video'];

export const routes = [
  '/treatment',
  '/resources/tools',
  '/resources/tools/video',
  '/resources/tools/psychoeducation',
  '/resources/tools/assessment/animateVideos',
  '/resources/tools/assessment/RCADS',
  '/resources/tools/assessment',
  '/resources/tools/medhandout',
  '/resources/tools/problemSolvingVideo',
  '/resources/tools/problemSolving',
  '/resources/tools/cognitive',
  '/resources/tools/specialPopulation',
];

export function useToolsPath() {
  const [path, setPath] = useState(pathDefault);

  const getPath = (location) => {
    const index = routes.findIndex((r) => r === location);

    if (index === 0) return;
    if (index === 1) {
      setPath(pathDefault);
      return;
    }

    if (index === routes.length - 1) {
      setPath([routes[index - 1], '/resources/help']);
      return;
    }

    if (index > 1 && index < routes.length) {
      setPath([routes[index - 1], routes[index + 1]]);
      return;
    }
  };

  useEffect(() => {
    setPath(pathDefault);
    return () => {
      setPath(pathDefault);
    };
  }, []);

  const getHeading = (path) => {
    const index = routes.findIndex((r) => r === path);
    if (index > 0) {
      if (index === 1) return 'Tools';
      if (index > 1 && index <= 3)
        return 'Cundill Centre Tools - Psychoeducation';
      else if (index > 3 && index <= 5)
        return 'Cundill Centre Tools - Assessment';
      else if (index === 6) return 'Assessment Tools';
      else if (index === routes.length - 1)
        return 'Special Populations and Considerations';
      else return 'Cundill Centre Tools - Treatment';
    } else return '';
  };

  return { path, getPath, getHeading };
}

import { useState, useEffect } from 'react';

// custom hook for setting page routes in the resources/tools page

export const headings = [
  'Short Animated Videos for Youth',
  'Mood Foundations Package for Youth',
  'Medication Handout for Youth',
  'Problem Solving Worksheets',
  'Cognitive Restructuring Worksheets',
  'Short Animated Videos for Primary Care Providers',
  'Quick Guide to the RCADS',
  'Assessment Tools',
];
//default
const pathDefault = ['/treatment', '/resources/tools'];

export const routes = [
  '/treatment',
  '/resources/tools/video',
  '/resources/tools',
  '/resources/tools/assessment/animateVideos',
  '/resources/tools/assessment/RCADS',
  '/resources/tools/assessment',
  '/resources/tools/medhandout',
  '/resources/tools/problemSolvingVideo',
  '/resources/tools/problemSolving',
  '/resources/tools/cognitive',
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
      if (index <= 2) return 'Cundill Centre Tools - Psychoeducation';
      else if (index > 2 && index <= 4)
        return 'Cundill Centre Tools - Assessment';
      else if (index === 5) return 'Assessment Tools';
      else return 'Cundill Centre Tools - Treatment';
    } else return '';
  };

  return { path, getPath, getHeading };
}

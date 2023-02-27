import { ViewportType } from 'types';
import useWindowSize from './useWindowSize';

export const useViewport = (): ViewportType | undefined => {
  const { width } = useWindowSize();

  const getViewportName = (
    width: number,
  ): 'mobile' | 'largeMobile' | 'tablet' | 'desktop' => {
    if (width < 460) return 'mobile';
    if (width >= 460 && width < 760) return 'largeMobile';
    if (width < 759 && width < 992) return 'tablet';
    else return 'desktop';
  };

  return {
    width,
    name: width ? getViewportName(width) : undefined,
  };
};

// utilities based on main hook

export const useIsMobile = (): Boolean => {
  const viewport = useViewport();

  return viewport?.name === 'mobile' || viewport?.name === 'largeMobile';
};

export const useIsTablet = (): Boolean => {
  const viewport = useViewport();

  return viewport?.name === 'tablet';
};

export const useIsDesktop = (): Boolean => {
  const viewport = useViewport();

  return viewport?.name === 'desktop';
};

export default useViewport;

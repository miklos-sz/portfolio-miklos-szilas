import useWindowSize from './useWindowSize';

const useIsDesktop = (): Boolean => {
  const { width } = useWindowSize();
  return (width !== undefined && width) >= 760;
};

export default useIsDesktop;

import styles from './Container.module.scss';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps): JSX.Element => {
  const { container } = styles;
  return <div className={container}>{children}</div>;
};

export default Container;

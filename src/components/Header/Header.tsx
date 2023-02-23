import styles from './Header.module.scss';
import Container from 'components/Container/Container';
import classNames from 'classnames';
import useScrollPosition from 'hooks/useScrollPosition';

const Header = (): JSX.Element => {
  return (
    <header
      className={classNames(styles.header, {
        [styles['scrolled']]: useScrollPosition(),
      })}
    >
      <Container>
        <div className={styles['inner-wrapper']}>
          <figure>brand</figure>
          <nav>
            <ul>
              <li>
                <nav>nav</nav>
              </li>
            </ul>
          </nav>
          <ul>
            <li>social</li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;

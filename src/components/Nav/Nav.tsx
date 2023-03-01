import Link from 'next/link';
import { HeaderType, NavItemType } from 'types';
import styles from './Nav.module.scss';

interface NavProps {
  headerData: HeaderType;
}

const Nav = ({ headerData }: NavProps): JSX.Element => {
  return (
    <nav data-testid="nav" className={styles.nav}>
      <ul>
        {headerData?.nav &&
          headerData?.nav.items.map((item: NavItemType, index: number) => {
            return (
              <li key={index}>
                <Link href={item.slug}>{item.title}</Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default Nav;

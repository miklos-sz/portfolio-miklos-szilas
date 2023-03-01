import classNames from 'classnames';
import Brand from 'components/Brand/Brand';
import Container from 'components/Container/Container';
import Nav from 'components/Nav/Nav';
import Social from 'components/Social/Social';
import useScrollPosition from 'hooks/useScrollPosition';
import { useIsDesktop } from 'hooks/useViewport';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HeaderType, ImageType } from 'types';
import styles from './Header.module.scss';

export interface HeaderProps {
  data: HeaderType;
  siteTitle: string;
}

const Header = ({ data, siteTitle }: HeaderProps): JSX.Element => {
  const [headerData, setHeaderData] = useState<HeaderType | null>(null);
  const verticalScrollPosition = useScrollPosition();
  const isDesktop = useIsDesktop();
  const isScrolled = verticalScrollPosition > 0;

  useEffect(() => {
    setHeaderData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerData]);

  return (
    <header
      className={classNames(styles.header, {
        [styles.scrolled]: useScrollPosition(),
      })}
      data-testid="header"
    >
      <Container>
        <div className={styles['inner-wrapper']}>
          {headerData?.logo && headerData?.logo.url && (
            <Brand logo={headerData.logo} showTitle={isDesktop && isScrolled} />
          )}
          {headerData?.nav && headerData?.nav.items.length && (
            <Nav headerData={headerData} />
          )}
          {headerData?.socialCollection &&
            headerData?.socialCollection.items.length && (
              <Social
                items={headerData?.socialCollection.items}
                siteTitle={siteTitle}
              />
            )}
        </div>
      </Container>
    </header>
  );
};

export default Header;

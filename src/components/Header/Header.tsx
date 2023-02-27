import classNames from 'classnames';
import Container from 'components/Container/Container';
import useScrollPosition from 'hooks/useScrollPosition';
import { useIsDesktop } from 'hooks/useViewport';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HeaderType, ImageType, NavItemType } from 'types';
import styles from './Header.module.scss';

export interface HeaderProps {
  data: HeaderType;
  siteTitle: string;
}

const Header = ({ data, siteTitle }: HeaderProps): JSX.Element => {
  const [headerData, setHeaderData] = useState<HeaderType | null>(null);
  const verticalScrollPosition = useScrollPosition();
  const isDesktop = useIsDesktop();

  useEffect(() => {
    setHeaderData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerData]);

  return (
    <header
      className={classNames(styles.header, {
        [styles.scrolled]: useScrollPosition(),
      })}
    >
      <Container>
        <div className={styles['inner-wrapper']}>
          {headerData?.logo.url && (
            <div>
              <Link href="/" className={styles.logo}>
                <Image
                  src={headerData?.logo.url}
                  alt={headerData?.logo.title || siteTitle}
                  width={headerData?.logo.width}
                  height={headerData?.logo.height}
                />
                {isDesktop &&
                  verticalScrollPosition > 0 &&
                  headerData.logo.title && (
                    <h4 className={styles['logo-title']}>
                      {headerData?.logo.title}
                    </h4>
                  )}
              </Link>
            </div>
          )}
          {headerData?.nav.items.length && (
            <nav>
              <ul>
                {headerData?.nav.items.map(
                  (item: NavItemType, index: number) => {
                    return (
                      <li key={index}>
                        <Link href={item.slug}>{item.title}</Link>
                      </li>
                    );
                  },
                )}
              </ul>
            </nav>
          )}
          {headerData?.socialCollection.items.length && (
            <ul className={styles.social}>
              {headerData.socialCollection.items.map(
                (image: ImageType, index: number) => {
                  const linkUrl = image.description ?? null;
                  return (
                    <React.Fragment key={index}>
                      {linkUrl && (
                        <li>
                          <Link href={linkUrl} target="_blank">
                            <Image
                              src={image.url}
                              alt={image.title ?? siteTitle}
                              width={image.width}
                              height={image.height}
                            />
                          </Link>
                        </li>
                      )}
                    </React.Fragment>
                  );
                },
              )}
            </ul>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;

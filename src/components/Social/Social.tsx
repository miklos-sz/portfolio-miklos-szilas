import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ImageType } from 'types';
import styles from './Social.module.scss';

interface SocialProps {
  items: ImageType[];
  siteTitle: string;
}

const Social = ({ items, siteTitle }: SocialProps) => {
  return (
    <ul className={styles.social} data-testid="social">
      {items.map((image: ImageType, index: number) => {
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
      })}
    </ul>
  );
};

export default Social;

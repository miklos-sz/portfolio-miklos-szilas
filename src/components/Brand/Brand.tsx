import Image from 'next/image';
import Link from 'next/link';
import { ImageType } from 'types';
import styles from './Brand.module.scss';

interface BrandProps {
  logo: ImageType;
  showTitle?: boolean;
  link?: string;
}

const Brand = ({ logo, showTitle, link }: BrandProps) => {
  return (
    <div className={styles.brand}>
      <Link href={link ?? '/'} className={styles.logo}>
        <Image
          src={logo.url}
          alt={logo.title}
          width={logo.width}
          height={logo.height}
        />
        {showTitle && <h4 className={styles.title}>{logo.title}</h4>}
      </Link>
    </div>
  );
};

export default Brand;

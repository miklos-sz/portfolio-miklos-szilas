import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import classNames from 'classnames';
import Container from 'components/Container/Container';
import useIsDesktop from 'hooks/useIsMobile';
import Image from 'next/image';
import { HeroType, ImageType } from 'types';
import styles from './Hero.module.scss';

interface HeroImageProps {
  image: ImageType;
  type?: 'desktop' | 'mobile';
  alt: string;
}

const HeroImage = ({ image, type, alt }: HeroImageProps): JSX.Element => {
  return (
    <div className={styles.image}>
      <Image
        // TODO: loader animgif
        // loader={}
        src={image.url}
        alt={alt}
        width={image.width}
        height={image.height}
        className={classNames(styles.image, {
          [styles[`image-${type}`]]: type ?? [styles['image-desktop']],
        })}
      />
    </div>
  );
};

interface HeroProps {
  hero: HeroType;
  title?: string;
}

const Hero = ({
  hero: { title, subtitle, content, image, imageMobile },
}: HeroProps): JSX.Element => {
  const isDesktop = useIsDesktop();

  return (
    <Container>
      <section className={styles.hero}>
        <div>
          {title && <h1>{title}</h1>}
          {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
          {!isDesktop && title && image && imageMobile && (
            <HeroImage
              image={imageMobile}
              alt={imageMobile.title || title}
              type={'mobile'}
            />
          )}
          {content && (
            <div className={styles.content}>
              {documentToReactComponents(content?.json)}
            </div>
          )}
        </div>
        {isDesktop && image && (
          <HeroImage
            image={image}
            alt={image.title || title}
            type={'desktop'}
          />
        )}
      </section>
    </Container>
  );
};

export default Hero;

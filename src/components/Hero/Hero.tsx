import styles from './Hero.module.scss';
import { HeroType } from '@/types/hero';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
interface HeroProps {
  data: HeroType;
}

const Hero = ({
  data: { title, subtitle, content, image },
}: HeroProps): JSX.Element => {
  return (
    <section className={styles.hero}>
      {title && <h1>{title}</h1>}
      {subtitle && <h4>{subtitle}</h4>}
      {content && (
        <div className={styles.content}>
          {documentToReactComponents(content?.json)}
        </div>
      )}
    </section>
  );
};

export default Hero;

import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Ignition Focused',
    Svg: require('@site/static/img/Logo-Ignition-Check.svg').default,
    description: (
      <>
        The Tamaki MES is built with Ignition in mind. It plugs directly in and lets you manage all configuration using Ignition's built-in tools. 
      </>
    ),
  },
  {
    title: 'Highly Extendable',
    Svg: require('@site/static/img/Extensible.svg').default,
    description: (
      <>
        The Tamaki MES Module comes with a wide range of baked-in MES features but is built with a modular design in mind. This allows you to extend the module with your own custom functionality.
      </>
    ),
  },
  {
    title: 'Powered by Spring Boot',
    Svg: require('@site/static/img/Spring-Boot.svg').default,
    description: (
      <>
        Spring Boot provides access to pre-built components and security features, eliminating the need to build everything from scratch. The result is a modern, maintainable solution that will evolve efficiently with customer needs, minimizing technical debt.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} style={{height: '5rem'}} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

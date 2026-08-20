import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Set up in minutes',
    description: (
      <>
        Build a product recommendation quiz from the app admin, then drop it
        into your theme as a block. No code, no developer.
      </>
    ),
  },
  {
    title: 'Editorial results',
    description: (
      <>
        Every result pairs a product trio with copy you write yourself, so your
        recommendations read like advice instead of a list.
      </>
    ),
  },
  {
    title: 'Built for Shopify',
    description: (
      <>
        Your catalogue, your theme, your checkout. Products and variants come
        straight from your store and add to cart in one step.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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

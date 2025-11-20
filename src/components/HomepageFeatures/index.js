import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Real-world simulation',
    Svg: require('@site/static/img/real-world.svg').default,
    description: (
      <>
        Testing your ideas on dataset may sound cool but to account for real world factors like slippage and latency requires NightShark.
      </>
    ),
  },
  {
    title: '100% Secured',
    Svg: require('@site/static/img/secured.svg').default,
    description: (
      <>
       With NightShark, all your scripts remains local within your machine. Protecting our member's intellectual property is one of our core mission.
      </>
    ),
  },
  {
    title: 'Smooth Learning Curve',
    Svg: require('@site/static/img/learning.svg').default,
    description: (
      <>
        We enabled simple and highly customizable functions. If you have prior programming experience, our documentation will get you upto speed in no time.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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

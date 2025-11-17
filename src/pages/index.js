import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="https://www.youtube.com/@ProcessOverProfitHQ"
            target="_blank"
            rel="noopener noreferrer"
            style={{marginRight: '1rem'}}>
            <img 
              src="/img/youtube-icon.svg" 
              alt="YouTube" 
              style={{width: '24px', height: '24px', marginRight: '8px', verticalAlign: 'middle'}} 
            />
            Watch on YouTube
          </Link>
          <Link
            className={clsx('button button--primary button--lg', styles.nightsharkButton)}
            href="https://nightshark.io"
            target="_blank"
            rel="noopener noreferrer">
            <img 
              src="/img/nightshark-logo.png" 
              alt="Nightshark" 
              style={{width: '24px', height: '24px', marginRight: '8px', verticalAlign: 'middle'}} 
            />
            Download Nightshark
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Trading Automation Platform`}
      description="Automate your trading strategies with ProcessOverProfit. Build, deploy, and monitor automated trading systems.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

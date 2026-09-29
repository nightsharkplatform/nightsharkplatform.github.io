import React from 'react';
import Layout from '@theme/Layout';

import chatgptIcon from '@site/docs/model-icons/chatgpt.svg';
import claudeIcon from '@site/docs/model-icons/claude.svg';
import geminiIcon from '@site/docs/model-icons/gemini.svg';
import metaIcon from '@site/docs/model-icons/meta.svg';
import xaiIcon from '@site/docs/model-icons/xai.svg';
import typeSafeIcon from '@site/docs/model-icons/typesafe.svg';

import styles from './models.module.css';

// Keep the newest changes first. Set status to "removed" for removals.
const modelChanges = [
  {
    date: 'September 29, 2026',
    model: 'GPT-6.1 Sol',
    provider: 'OpenAI',
    status: 'added',
    icon: chatgptIcon,
  },
  {
    date: 'September 28, 2026',
    model: 'Claude Sonnet 5.5',
    provider: 'Anthropic',
    status: 'added',
    icon: claudeIcon,
  },
  {
    date: 'September 27, 2026',
    model: 'Claude Opus 5.5',
    provider: 'Anthropic',
    status: 'added',
    icon: claudeIcon,
  },
  {
    date: 'September 26, 2026',
    model: 'Google Gemini 3.7 Flash',
    provider: 'Google',
    status: 'added',
    icon: geminiIcon,
  },
  {
    date: 'September 24, 2026',
    model: 'Claude Fable 5.1',
    provider: 'Anthropic',
    status: 'added',
    icon: claudeIcon,
  },
  {
    date: 'September 24, 2026',
    model: 'GPT-6 Astra',
    provider: 'OpenAI',
    status: 'added',
    icon: chatgptIcon,
  },
  {
    date: 'September 24, 2026',
    model: 'Grok 4.7',
    provider: 'xAI',
    status: 'added',
    icon: xaiIcon,
  },
  {
    date: 'September 24, 2026',
    model: 'Jev 1.13',
    provider: 'TypeSafe AI',
    status: 'added',
    icon: typeSafeIcon,
  },
  {
    date: 'September 24, 2026',
    model: 'Muse Spark 1.3',
    provider: 'Meta AI',
    status: 'added',
    icon: metaIcon,
    iconClassName: styles.metaIcon,
  },
];

const changeGroups = modelChanges.reduce((groups, change) => {
  const currentGroup = groups[groups.length - 1];

  if (currentGroup && currentGroup.date === change.date) {
    currentGroup.changes.push(change);
  } else {
    groups.push({date: change.date, changes: [change]});
  }

  return groups;
}, []);

function ModelChange({change}) {
  const isRemoved = change.status === 'removed';
  const ModelIcon = change.icon;

  return (
    <article className={styles.timelineItem}>
      <div
        className={`${styles.iconMarker} ${isRemoved ? styles.removedMarker : ''}`}
        role="img"
        aria-label={`${change.provider} icon`}>
        <ModelIcon
          className={change.iconClassName}
          aria-hidden="true"
          focusable="false"
        />
      </div>

      <div className={styles.changeContent}>
        <div className={styles.changeHeading}>
          <h3>{change.model}</h3>
          <span
            className={`${styles.status} ${
              isRemoved ? styles.removedStatus : styles.addedStatus
            }`}>
            <span className={styles.statusLabel}>
              {isRemoved ? 'Removed' : 'Added'}
            </span>
          </span>
        </div>
        <p className={styles.meta}>{change.provider}</p>
      </div>
    </article>
  );
}

export default function ModelsChangelog() {
  return (
    <Layout
      title="AI Models Changelog"
      description="See which AI models have been added to or removed from NightShark AI Mode.">
      <main className={styles.page}>
        <div className={styles.container}>
          <header className={styles.header}>
            <p className={styles.eyebrow}>NightShark AI Mode</p>
            <h1>AI Models Changelog</h1>
            <p className={styles.intro}>
              Models added to and removed from NightShark AI Mode, newest first.
            </p>
            <div className={styles.legend} aria-label="Changelog status key">
              <span>
                <i className={styles.addedDot} aria-hidden="true" /> Added
              </span>
              <span>
                <i className={styles.removedDot} aria-hidden="true" /> Removed
              </span>
            </div>
          </header>

          <section className={styles.timeline} aria-label="AI model changes">
            {changeGroups.map((group) => {
              const headingId = `changes-${group.date
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')}`;

              return (
                <section
                  className={styles.dateGroup}
                  aria-labelledby={headingId}
                  key={group.date}>
                  <header className={styles.dateGroupHeader}>
                    <h2 className={styles.dateHeading} id={headingId}>
                      {group.date}
                    </h2>
                    <span className={styles.dateSummary}>
                      {group.changes.length}{' '}
                      {group.changes.length === 1 ? 'model' : 'models'} added
                    </span>
                  </header>
                  <div className={styles.dateChanges}>
                    {group.changes.map((change) => (
                      <ModelChange
                        key={`${change.provider}-${change.model}`}
                        change={change}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </section>
        </div>
      </main>
    </Layout>
  );
}

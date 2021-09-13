import React from 'react';
import { css } from '@emotion/react';
import pluralize from 'pluralize';
import { Surface, Link, Tag } from '@newrelic/gatsby-theme-newrelic';
import Intro from '../Intro';
import { quickstart } from '../../types';

const QuickstartDataSources = ({ quickstart }) => (
  <>
    <Intro
      css={css`
        margin-bottom: 16px;
      `}
    >
      {quickstart.name} observability quickstart contains{' '}
      {pluralize('data source', quickstart.documentation?.length ?? 0, true)}. A
      data source is the location where data that is being used originates from.{' '}
    </Intro>

    <div
      css={css`
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(3, 1fr);

        @media (max-width: 1180px) {
          grid-template-columns: repeat(1, 1fr);
        }
      `}
    >
      {quickstart.documentation.map((doc, index) => (
        <Surface
          key={index}
          as={Link}
          to={doc.url}
          base={Surface.BASE.PRIMARY}
          css={css`
            padding: 1rem;
            color: inherit;
          `}
          interactive
        >
          <h3>{doc.name}</h3>
          <Tag
            css={css`
              display: inline-block;
              margin-bottom: 1rem;
            `}
          >
            Docs
          </Tag>

          {doc.description && <p>{doc.description}</p>}
        </Surface>
      ))}
    </div>
  </>
);

QuickstartDataSources.propTypes = {
  quickstart: quickstart.isRequired,
};

export default QuickstartDataSources;

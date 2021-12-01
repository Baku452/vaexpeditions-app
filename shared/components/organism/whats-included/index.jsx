import React from 'react';
import { Element } from 'react-scroll';

import { Title } from '../../atoms/title/index';
import styles from './index.module.scss';

function WhatsIncluded({ include, exclude }) {
  return (
    <Element name="whats-included" className="container pt-5 pb-5">
    <div className='row '>
      <div className={`${styles.boxWhatsInclude} col-12 col-md-6 fs-16 lh-29`}>
          <Title title="WHAT'S INCLUDED" />
          <div dangerouslySetInnerHTML={{ __html: include }} />
      </div>
        <div className={`${styles.boxnotWhatsInclude} col-12 col-md-6 fs-16 lh-29`}>
          <Title title="WHAT'S NOT INCLUDED" />
          <div dangerouslySetInnerHTML={{ __html: exclude }} />
        </div>
    </div>
    </Element>
  );
}

export { WhatsIncluded };

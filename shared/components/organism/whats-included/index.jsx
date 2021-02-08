import React from 'react';
import { Element } from 'react-scroll';

import { Title } from '../../atoms/title/index';

function WhatsIncluded({ include, exclude }) {
  return (
    <Element name="whats-included" className="container pt-5 pb-5">
      <Title title="WHAT'S INCLUDED" />
      <div className="row">
        <div
          className="col-12 col-md-6 fs-16 lh-29"
          dangerouslySetInnerHTML={{ __html: include }}
        />
        <div
          className="col-12 col-md-6 fs-16 lh-29"
          dangerouslySetInnerHTML={{ __html: exclude }}
        />
      </div>
    </Element>
  );
}

export { WhatsIncluded };

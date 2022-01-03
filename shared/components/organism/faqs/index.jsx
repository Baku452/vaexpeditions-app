/* eslint-disable react/no-danger */
import React from 'react';
import { Element } from 'react-scroll';

import { Collapse, CollapseContent1 } from '../../atoms/acoordion/index';
import { Title } from '../../atoms/title/index';

function Faqs({ faqs }) {
  return (
    <Element name="trip-preparation-faqs" className="container pt-5 pb-5">
      <Title title="Trip Preparation & FAQS" />
      <div className="row">
        <Collapse open={0}>
          {faqs.map((item, index) => (
            <CollapseContent1 key={index.toString()} index={index} title={item?.title}>
              <div
                className="col-12 fs-15 lh-29"
                dangerouslySetInnerHTML={{ __html: item?.content }}
              />
            </CollapseContent1>
          ))}
        </Collapse>
      </div>
    </Element>
  );
}

export { Faqs };

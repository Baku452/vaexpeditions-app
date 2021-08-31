/* eslint-disable react/no-danger */
import React from 'react';

import { Collapse, CollapseContent } from '../../atoms/acoordion/index';
import { Title } from '../../atoms/title/index';
import styles from './index.module.scss';

function FaqsDestinations({ faqs }) {
  return (
    <>
      <div className="row">
        <div className={`${styles.pre} `}>
          <h2>PRE-TRAVEL</h2>
        </div>
        <Collapse open={0}>
          {faqs
            .filter(faq => faq.preTravel)
            .map(item => (
              <CollapseContent
                key={item.id.toString()}
                index={item.id}
                title={item?.title}>
                <div
                  className="col-12 fs-15 lh-29"
                  dangerouslySetInnerHTML={{ __html: item?.content }}
                />
              </CollapseContent>
            ))}
        </Collapse>
      </div>
      <div className={` row`}>
        <div className={`${styles.pre} `}>
          <h2>ON-TRAVEL</h2>
        </div>
        <Collapse open={0}>
          {faqs
            .filter(faq => faq.onTravel)
            .map(item => (
              <CollapseContent
                key={item.id.toString()}
                index={item.id}
                title={item?.title}>
                <div
                  className="col-12 fs-15 lh-29"
                  dangerouslySetInnerHTML={{ __html: item?.content }}
                />
              </CollapseContent>
            ))}
        </Collapse>
      </div>
      <div className="row">
        <div className={`${styles.pre} `}>
          <h2>POST-TRAVEL</h2>
        </div>
        <Collapse open={0}>
          {faqs
            .filter(faq => faq.postTravel)
            .map(item => (
              <CollapseContent
                key={item.id.toString()}
                index={item.id}
                title={item?.title}>
                <div
                  className="col-12 fs-15 lh-29"
                  dangerouslySetInnerHTML={{ __html: item?.content }}
                />
              </CollapseContent>
            ))}
        </Collapse>
      </div>
    </>
  );
}

// (
//   <CollapseContent key={index.toString()} index={index} title={item?.title}>
//     <div
//       className="col-12 fs-15 lh-29"
//       dangerouslySetInnerHTML={{ __html: item?.content }}
//     />
//   </CollapseContent>
// ))}

export { FaqsDestinations };

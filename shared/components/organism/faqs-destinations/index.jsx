/* eslint-disable react/no-danger */
import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

import { CollapseContent2, CollapseContent3, CollapseMenu } from '@/components/index';

import { Collapse } from '../../atoms/acoordion/index';
import styles from './index.module.scss';

function FaqsDestinations({ faqs }) {
  return (
    <>
      <Accordion key="0" defaultActiveKey="0">
        <Card index={1} open={1} className="pt-0">
          <CollapseMenu open={1} index={1} className="">
            <CollapseContent2 index={1} title="PRE - TRAVEL">
              <Card.Body>
                <Collapse eventKey="0" open={0}>
                  {faqs
                    .filter(faq => faq.preTravel)
                    .map(item => (
                      <CollapseContent3
                        key={item.id.toString()}
                        index={item.id}
                        title={item?.title}>
                        <div
                          className="col-12 fs-15 lh-29"
                          dangerouslySetInnerHTML={{ __html: item?.content }}
                        />
                      </CollapseContent3>
                    ))}
                </Collapse>
              </Card.Body>
            </CollapseContent2>
          </CollapseMenu>
        </Card>

        <Card>
          <CollapseMenu open={1} index={1}>
            <CollapseContent2
              index={1}
              title="DURING YOUR TRIP"
              className={`${styles.pre} `}>
              <Card.Body>
                <Collapse eventKey="1" open={1}>
                  {faqs
                    .filter(faq => faq.onTravel)
                    .map(item => (
                      <CollapseContent3
                        key={item.id.toString()}
                        index={item.id}
                        title={item?.title}>
                        <div
                          className="col-12 fs-15 lh-29"
                          dangerouslySetInnerHTML={{ __html: item?.content }}
                        />
                      </CollapseContent3>
                    ))}
                </Collapse>
              </Card.Body>
            </CollapseContent2>
          </CollapseMenu>
        </Card>

        <Card>
          <CollapseMenu open={1} index={1}>
            <CollapseContent2
              index={1}
              title="POST - TRAVEL"
              className={`${styles.pre} `}>
              <Card.Body>
                <Collapse eventKey="2" open={2}>
                  {faqs
                    .filter(faq => faq.postTravel)
                    .map(item => (
                      <CollapseContent3
                        key={item.id.toString()}
                        index={item.id}
                        title={item?.title}>
                        <div
                          className="col-12 fs-15 lh-29"
                          dangerouslySetInnerHTML={{ __html: item?.content }}
                        />
                      </CollapseContent3>
                    ))}
                </Collapse>
              </Card.Body>
            </CollapseContent2>
          </CollapseMenu>
        </Card>
      </Accordion>
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

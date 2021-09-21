/* eslint-disable react/no-danger */
import AccordionCollapse from 'node_modules/react-bootstrap/esm/AccordionCollapse';
import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

import { Collapse, CollapseContent2 } from '../../atoms/acoordion/index';
import styles from './index.module.scss';

function FaqsDestinations({ faqs }) {
  return (
    <>
      <Accordion key="0" defaultActiveKey="0">
        <Accordion.Toggle eventKey="0" className="w-100 text-center border-0">
          <Card.Header>
            <div className={`${styles.pre} `}>
              <h2>PRE-TRAVEL</h2>
            </div>
          </Card.Header>
        </Accordion.Toggle>
        <AccordionCollapse eventKey="0">
          <Card.Body>
            <Collapse eventKey="0" open={0}>
              {faqs
                .filter(faq => faq.preTravel)
                .map(item => (
                  <CollapseContent2
                    key={item.id.toString()}
                    index={item.id}
                    title={item?.title}>
                    <div
                      className="col-12 fs-15 lh-29"
                      dangerouslySetInnerHTML={{ __html: item?.content }}
                    />
                  </CollapseContent2>
                ))}
            </Collapse>
          </Card.Body>
        </AccordionCollapse>

        <Card>
          <Accordion.Toggle
            variant=""
            eventKey="1"
            className="w-100 text-center border-0">
            <Card.Header>
              <div className={`${styles.pre} `}>
                <h2>DURING YOUR TRIP</h2>
              </div>
            </Card.Header>
          </Accordion.Toggle>
          <AccordionCollapse eventKey="1">
            <Card.Body>
              <Collapse eventKey="1" open={1}>
                {faqs
                  .filter(faq => faq.onTravel)
                  .map(item => (
                    <CollapseContent2
                      key={item.id.toString()}
                      index={item.id}
                      title={item?.title}>
                      <div
                        className="col-12 fs-15 lh-29"
                        dangerouslySetInnerHTML={{ __html: item?.content }}
                      />
                    </CollapseContent2>
                  ))}
              </Collapse>
            </Card.Body>
          </AccordionCollapse>
        </Card>

        <Card>
          <Accordion.Toggle eventKey="2" className="w-100 text-center border-0">
            <Card.Header>
              <div className={`${styles.pre} `}>
                <h2>POST-TRAVEL</h2>
              </div>
            </Card.Header>
          </Accordion.Toggle>
          <AccordionCollapse eventKey="2">
            <Card.Body>
              <Collapse eventKey="2" open={2}>
                {faqs
                  .filter(faq => faq.postTravel)
                  .map(item => (
                    <CollapseContent2
                      key={item.id.toString()}
                      index={item.id}
                      title={item?.title}>
                      <div
                        className="col-12 fs-15 lh-29"
                        dangerouslySetInnerHTML={{ __html: item?.content }}
                      />
                    </CollapseContent2>
                  ))}
              </Collapse>
            </Card.Body>
          </AccordionCollapse>
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

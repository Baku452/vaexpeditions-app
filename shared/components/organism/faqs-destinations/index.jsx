/* eslint-disable react/no-danger */
import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { CollapseContentMenu1, CollapseMenu } from '@/components/index';

// import styles from './index.module.scss';

function FaqsDestinations({ faqs }) {
  return (
    <>
      <div className="d-block d-md-none">
        <CollapseMenu open={0} index={0} className="accordion-button ">
          <CollapseContentMenu1 index={0} title="PRE - TRAVEL">
            <CollapseMenu eventKey="0" open={0}>
              {faqs
                .filter(faq => faq.preTravel)
                .map(item => (
                  <CollapseContentMenu1
                    key={item.id.toString()}
                    index={item.id}
                    title={item?.title}>
                    <div
                      className="col-12 fs-15 lh-29"
                      dangerouslySetInnerHTML={{ __html: item?.content }}
                    />
                  </CollapseContentMenu1>
                ))}
            </CollapseMenu>
          </CollapseContentMenu1>
        </CollapseMenu>

        <CollapseMenu open={1} index={1}>
          <CollapseContentMenu1 index={1} title="DURING YOUR TRIP">
            <CollapseMenu eventKey="1" open={1}>
              {faqs
                .filter(faq => faq.onTravel)
                .map(item => (
                  <CollapseContentMenu1
                    key={item.id.toString()}
                    index={item.id}
                    title={item?.title}>
                    <div
                      className="col-12 fs-15 lh-29"
                      dangerouslySetInnerHTML={{ __html: item?.content }}
                    />
                  </CollapseContentMenu1>
                ))}
            </CollapseMenu>
          </CollapseContentMenu1>
        </CollapseMenu>

        <CollapseMenu open={1} index={1}>
          <CollapseContentMenu1 index={1} title="POST - TRAVEL">
            <CollapseMenu eventKey="2" open={2}>
              {faqs
                .filter(faq => faq.postTravel)
                .map(item => (
                  <CollapseContentMenu1
                    key={item.id.toString()}
                    index={item.id}
                    title={item?.title}>
                    <div
                      className="col-12 fs-15 lh-29"
                      dangerouslySetInnerHTML={{ __html: item?.content }}
                    />
                  </CollapseContentMenu1>
                ))}
            </CollapseMenu>
          </CollapseContentMenu1>
        </CollapseMenu>
      </div>

      <div className="d-none d-md-block">
        <Tabs defaultActiveKey="pre-travel" id="uncontrolled-tab-example">
          <Tab eventKey="pre-travel" title="PRE - TRAVEL" className="w-10">
            <CollapseMenu eventKey="0" open={0}>
              {faqs
                .filter(faq => faq.preTravel)
                .map(item => (
                  <CollapseContentMenu1
                    key={item.id.toString()}
                    index={item.id}
                    title={item?.title}>
                    <div
                      className="col-12 fs-15 lh-29"
                      dangerouslySetInnerHTML={{ __html: item?.content }}
                    />
                  </CollapseContentMenu1>
                ))}
            </CollapseMenu>
          </Tab>

          <Tab eventKey="During your Trip" title="DURING YOUR TRIP">
            <CollapseMenu eventKey="1" open={1}>
              {faqs
                .filter(faq => faq.onTravel)
                .map(item => (
                  <CollapseContentMenu1
                    key={item.id.toString()}
                    index={item.id}
                    title={item?.title}>
                    <div
                      className="col-12 fs-15 lh-29"
                      dangerouslySetInnerHTML={{ __html: item?.content }}
                    />
                  </CollapseContentMenu1>
                ))}
            </CollapseMenu>
          </Tab>

          <Tab eventKey="post-travel" title="POST-TRAVEL" className="fw-bold">
            <CollapseMenu eventKey="2" open={2}>
              {faqs
                .filter(faq => faq.postTravel)
                .map(item => (
                  <CollapseContentMenu1
                    key={item.id.toString()}
                    index={item.id}
                    title={item?.title}>
                    <div
                      className="col-12 fs-15 lh-29"
                      dangerouslySetInnerHTML={{ __html: item?.content }}
                    />
                  </CollapseContentMenu1>
                ))}
            </CollapseMenu>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export { FaqsDestinations };

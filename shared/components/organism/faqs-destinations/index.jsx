/* eslint-disable react/no-danger */
import React from 'react';
import {Accordion,Card} from 'react-bootstrap';
import { Collapse, CollapseContent } from '../../atoms/acoordion/index';
import { CollapseContent2 } from '../../atoms/acoordion/index';
import { Title } from '../../atoms/title/index';
import styles from './index.module.scss';

function FaqsDestinations({ faqs }) {
  return (
    <>

<Accordion defaultActiveKey="0" flush>
      
    <Card> 
      <Accordion.Toggle  as={Card.Header} eventKey="0" >
        <div className={`${styles.pre}`}>
          <h2>PRE-TRAVEL</h2>
        </div>
      </Accordion.Toggle> 
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
    </Card>  
      

     <Card> 
     <Accordion.Toggle as={Card.Header} eventKey="1" >
        <div className={`${styles.pre} `}>
          <h2>ON-TRAVEL</h2>
        </div>
        </Accordion.Toggle> 
        <Card.Body>
        <Collapse eventKey="1" open={0}>
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
      </Card>

      
      <Accordion.Toggle as={Card.Header} eventKey="2" > 
       <div className={`${styles.pre}`}>
          <h2>POST-TRAVEL</h2>
        </div>
        </Accordion.Toggle> 
        <Card.Body>       
        <Collapse eventKey="2" open={0} >
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

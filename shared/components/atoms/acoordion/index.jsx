import { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Card from 'react-bootstrap/Card';

import { Icon } from '@/components/index';
import ArrowDown from '@/icons/arrow-down.svg';

import styles from './index.module.scss';

function ContextAwareToggle({ children, eventKey, callback, className }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      type="button"
      className={`text-left position-relative ${styles.button}`}
      style={{ background: className }}
      onClick={decoratedOnClick}>
      {children}
      <Icon
        component={ArrowDown}
        viewBox="0 0 512 512"
        className={`${isCurrentEventKey ? '' : styles.rotate} ${styles.icon}`}
      />
    </button>
  );
}

function Collapse({ children, open = 1 }) {
  return (
    <Accordion defaultActiveKey={open} className="accordion w-100">
      {children}
    </Accordion>
  );
}

function CollapseContent({ index, title, children }) {
  function getColor(colorIndex) {
    return (colorIndex + 1) % 2 === 0 ? '#ffffff' : '#f2f2f2';
  }

  return (
    <>
      <Card.Header className={styles.header}>
        <ContextAwareToggle eventKey={index + 1} className={getColor(index)}>
          <h2 className="fs-16 m-0 font-weight-bold p-0">{title}</h2>
        </ContextAwareToggle>
      </Card.Header>

      <Accordion.Collapse eventKey={index + 1}>
        <Card.Body style={{ background: getColor(index) }}>{children}</Card.Body>
      </Accordion.Collapse>
    </>
  );
}

export { ContextAwareToggle, Collapse, CollapseContent };

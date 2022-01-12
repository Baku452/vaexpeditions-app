/* eslint-disable no-unused-vars */
import Link from 'next/link';
import { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from 'react-bootstrap/AccordionContext';
import Card from 'react-bootstrap/Card';

import { Icon } from '@/components/index';
import ArrowDown from '@/icons/arrow-down.svg';

import styles from './index.module.scss';

function ContextAwareToggle({ children, eventKey, callback, className }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      type="button"
      className={`text-start position-relative ${styles.button}`}
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

function CollapseContent({ index, title, children, link }) {
  function getColor(colorIndex) {
    return (colorIndex + 1) % 2 === 0 ? '#ffffff' : '#f2f2f2';
  }
  return (
    <Accordion defaultActiveKey={1}>
      <Card.Header className={`${styles.header}`}>
        <ContextAwareToggle eventKey={index + 1} className={getColor(index)}>
          <Link href={link || '#'}>
            <a className="fs-16 m-0 fw-bold p-0">{title}</a>
          </Link>
        </ContextAwareToggle>
      </Card.Header>

      <Accordion.Collapse eventKey={index + 1}>
        <Card.Body style={{ background: getColor(index) }} className="py-1">
          {children}
        </Card.Body>
      </Accordion.Collapse>
    </Accordion>
  );
}

function CollapseContent1({ index, title, children }) {
  function getColor(colorIndex) {
    return (colorIndex + 1) % 2 === 0 ? '#ffffff' : '#f2f2f2';
  }
  return (
    <Accordion defaultActiveKey={1}>
      <Card.Header className={`${styles.header}`}>
        <ContextAwareToggle eventKey={index + 1} className={getColor(index)}>
          <h2 className="fs-16 m-0  p-0">{title}</h2>
        </ContextAwareToggle>
      </Card.Header>

      <Accordion.Collapse eventKey={index + 1}>
        <Card.Body style={{ background: getColor(index) }} className="py-1">
          {children}
        </Card.Body>
      </Accordion.Collapse>
    </Accordion>
  );
}

function CollapseContent2({ index, title, children }) {
  return (
    <>
      <Card.Header className={styles.header}>
        <ContextAwareToggle eventKey={index + 1} className="#ffffff background2 ">
          <h2 className="fs-18 m-0 p-0 text-center ">{title}</h2>
        </ContextAwareToggle>
      </Card.Header>
      <Accordion.Collapse eventKey={index + 1}>
        <Card.Body className="py-0" style={{ background: '#ffffff' }}>
          {children}
        </Card.Body>
      </Accordion.Collapse>
    </>
  );
}
function CollapseContent3({ index, title, children }) {
  return (
    <>
      <Card.Header className={styles.header}>
        <ContextAwareToggle eventKey={index + 1} className="#ffffff ">
          <h2 className="fs-18 m-0 p-0 ">{title}</h2>
        </ContextAwareToggle>
      </Card.Header>
      <Accordion.Collapse eventKey={index + 1}>
        <Card.Body className="py-0" style={{ background: '#ffffff' }}>
          {children}
        </Card.Body>
      </Accordion.Collapse>
    </>
  );
}

function CollapseMenu({ children, open = 0 }) {
  return (
    <Accordion defaultActiveKey="0" className={`${styles.accordion}`}>
      {children}
    </Accordion>
  );
}

function CollapseContentMenu1({ title, children }) {
  return (
    <>
      <Accordion defaultActiveKey="0" className={`${styles.accordion} accordion-into `}>
        <Accordion.Header className={`${styles.header} `}>
          <p className="fs-18 m-0 p-0 ">{title}</p>
        </Accordion.Header>
        <Accordion.Body className="py-0">{children}</Accordion.Body>
      </Accordion>
    </>
  );
}

function CollapseContentMenu({ title, link, children }) {
  return (
    <>
      <Accordion.Header className={`${styles.header} d-flex  accordion-into`}>
        <Link href={link || '#'}>
          <a className="p-0">{title}</a>
        </Link>
      </Accordion.Header>

      {/* <Accordion.Collapse eventKey={1}> */}
      <Accordion.Body className="py-0">{children}</Accordion.Body>
      {/* </Accordion.Collapse> */}
    </>
  );
}

function CollapseContentMenu2({ title, link, children }) {
  function getColor(colorIndex) {
    return (colorIndex + 1) % 2 === 0 ? '#ffffff' : '#f2f2f2';
  }
  return (
    <>
      <Accordion defaultActiveKey="0" className={`${styles.accordion} `}>
        <Accordion.Header className={`${styles.header} `}>
          <p className="fs-18 m-0 p-0 fw-bold">{title}</p>
        </Accordion.Header>
        <Accordion.Body className="py-0">{children}</Accordion.Body>
      </Accordion>
    </>
  );
}

export {
  CollapseMenu,
  CollapseContentMenu,
  ContextAwareToggle,
  Collapse,
  CollapseContent,
  CollapseContent1,
  CollapseContent2,
  CollapseContent3,
  CollapseContentMenu1,
  CollapseContentMenu2,
};

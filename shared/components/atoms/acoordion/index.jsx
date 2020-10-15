import { useContext } from 'react';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

import { Icon } from '@/components/index';
import ArrowDown from '@/icons/arrow-down.svg';

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
      className={`${
        isCurrentEventKey ? '' : 'rotate'
      } ${className} text-left position-relative`}
      onClick={decoratedOnClick}>
      {children}
      <Icon component={ArrowDown} viewBox="0 0 512 512" className="icon" />
    </button>
  );
}

export { ContextAwareToggle };

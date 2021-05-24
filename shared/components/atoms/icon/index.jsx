import clsx from 'clsx';
import * as React from 'react';

import classes from './index.module.scss';

const Icon = React.forwardRef(function Icon(props, ref) {
  const {
    children,
    className,
    // color = 'inherit',
    component: Component = 'svg',
    // fontSize = 'default',
    htmlColor,
    titleAccess,
    viewBox = '0 0 512 512',
    ...other
  } = props;

  return (
    <Component
      className={clsx(classes.Icon, className)}
      focusable="false"
      viewBox={viewBox}
      color={htmlColor}
      aria-hidden={titleAccess ? undefined : true}
      role={titleAccess ? 'img' : undefined}
      ref={ref}
      {...other}>
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </Component>
  );
});

export { Icon };

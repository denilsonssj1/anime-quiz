/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

interface LinkProps {
    children: any;
    href: string;
    [x: string]: any;
}

const Link:React.FC<LinkProps> = ({ children, href, ...props }) => (
  <NextLink href={href} passHref>
    <a {...props}>
      {children}
    </a>
  </NextLink>
);

Link.defaultProps = {

};

Link.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired,
};

export default Link;

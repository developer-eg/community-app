/**
 * ResourceCard component
 */

import React from 'react';
import PT from 'prop-types';
import { themr } from 'react-css-themr';
import { Link } from 'react-router-dom';
import defaultStyle from './style.scss';

function ResourceCard(props) {
  const { icon: Icon, title, text, link, theme } = props;

  return (
    <div className={theme.container}>
      <Icon className={theme.icon} />
      <h3 className={theme.title}>{title}</h3>
      <p className={theme.text}>{text}</p>
      {link &&
        <div className={theme.linkWrap}>
          <Link className={theme.link} to={link.url}>{link.title}</Link>
        </div>
      }
    </div>
  );
}

ResourceCard.defaultProps = {
  link: null,
  theme: {},
};

ResourceCard.propTypes = {
  icon: PT.func.isRequired,
  title: PT.string.isRequired,
  text: PT.string.isRequired,
  link: PT.shape({
    title: PT.string.isRequired,
    url: PT.string.isRequired,
  }),
  theme: PT.shape({
    container: PT.string,
    icon: PT.string,
    title: PT.string,
    text: PT.string,
    linkWrap: PT.string,
    link: PT.string,
  }),
};

export default themr('tcCommunities-ResourceCard', defaultStyle)(ResourceCard);

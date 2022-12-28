import PropTypes from 'prop-types';
import {
  DescriptionTitle,
  StyledDescription,
  StyledMainTitle,
  StyledTitle,
} from './PageTitles.styled';

export const MainTitle = ({ text, style }) => {
  return <StyledMainTitle style={style}>{text}</StyledMainTitle>;
};

export const DetailsTitle = ({ text }) => {
  return <DescriptionTitle>{text}</DescriptionTitle>;
};

export const Title = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

export const Text = ({ text, style, children }) => {
  return (
    <StyledDescription style={style}>
      {text}
      {children}
    </StyledDescription>
  );
};

MainTitle.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
};

DetailsTitle.propTypes = {
  text: PropTypes.string,
};

Title.propTypes = {
  text: PropTypes.string,
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
  children: PropTypes.node,
};

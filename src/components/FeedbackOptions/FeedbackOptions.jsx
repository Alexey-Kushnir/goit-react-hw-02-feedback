import PropTypes from 'prop-types';
import {
  StatsButtonsList,
  StatsButtonsListItem,
  StatsButton,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StatsButtonsList>
      <StatsButtonsListItem>
        <StatsButton
          type="button"
          onClick={() => onLeaveFeedback(options[0].toLowerCase())}
        >
          {options[0]}
        </StatsButton>
      </StatsButtonsListItem>
      <StatsButtonsListItem>
        <StatsButton
          type="button"
          onClick={() => onLeaveFeedback(options[1].toLowerCase())}
        >
          {options[1]}
        </StatsButton>
      </StatsButtonsListItem>
      <StatsButtonsListItem>
        <StatsButton
          type="button"
          onClick={() => onLeaveFeedback(options[2].toLowerCase())}
        >
          {options[2]}
        </StatsButton>
      </StatsButtonsListItem>
    </StatsButtonsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

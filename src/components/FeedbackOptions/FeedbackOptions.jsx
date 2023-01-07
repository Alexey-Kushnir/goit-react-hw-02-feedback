import PropTypes from 'prop-types';
import {
  StatsButtonsList,
  StatsButtonsListItem,
  StatsButton,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StatsButtonsList>
      {options.map((option, idx) => {
        return (
          <StatsButtonsListItem key={idx}>
            <StatsButton
              type="button"
              onClick={() => onLeaveFeedback(option.toLowerCase())}
            >
              {option}
            </StatsButton>
          </StatsButtonsListItem>
        );
      })}
    </StatsButtonsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

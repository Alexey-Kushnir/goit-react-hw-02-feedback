// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Container,
  Title,
  StatsButtonsList,
  StatsButtonsListItem,
  StatsButton,
  StatsList,
  StatsListItem,
  StatsItem,
} from './FeedbackWidget.styled';

export class FeedbackWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  addNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  addBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    // this.setState(prevState => ({
    //   bad: prevState.bad + 1,
    // }));
  };

  countPositiveFeedbackPercentage = () => {
    // this.setState(prevState => ({
    //   bad: prevState.bad + 1,
    // }));
  };

  render() {
    return (
      <Container>
        <Title>Please leave feedback</Title>
        <StatsButtonsList>
          <StatsButtonsListItem>
            <StatsButton type="button" onClick={this.addGoodFeedback}>
              Good
            </StatsButton>
          </StatsButtonsListItem>
          <StatsButtonsListItem>
            <StatsButton type="button" onClick={this.addNeutralFeedback}>
              Neutral
            </StatsButton>
          </StatsButtonsListItem>
          <StatsButtonsListItem>
            <StatsButton type="button" onClick={this.addBadFeedback}>
              Bad
            </StatsButton>
          </StatsButtonsListItem>
        </StatsButtonsList>
        <Title>Statistics</Title>
        <StatsList>
          <StatsListItem>
            <StatsItem>Good: {this.state.good}</StatsItem>
          </StatsListItem>
          <StatsListItem>
            <StatsItem>Neutral: {this.state.neutral}</StatsItem>
          </StatsListItem>
          <StatsListItem>
            <StatsItem>Bad: {this.state.bad}</StatsItem>
          </StatsListItem>
          <StatsListItem>
            <StatsItem>Total: {0}</StatsItem>
          </StatsListItem>
          <StatsListItem>
            <StatsItem>Positive feedback: {0}</StatsItem>
          </StatsListItem>
        </StatsList>
      </Container>
    );
  }
}

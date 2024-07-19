import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  handleOnClick = kind => {
    // console.log(kind);
    this.setState(prevState => ({
      // copies all properties. Ensure that it doesnt lose any existing state properties
      ...prevState,
      [kind]: prevState[kind] + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback === 0) {
      return 0;
    } else {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ['good', 'neutral', 'bad'];
    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please Leave Feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleOnClick}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </>
    );
  }
}

// export const App = () => {
//
// };

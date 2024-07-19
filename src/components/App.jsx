import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const { good, neutral, bad } = feedback;

  const countTotalFeedback = () => {
    // const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const handleOnClick = kind => {
    // console.log(kind);
    setFeedback(prevState => ({
      // copies all properties. Ensure that it doesnt lose any existing state properties
      ...prevState,
      [kind]: prevState[kind] + 1,
    }));
  };

  const countPositiveFeedbackPercentage = () => {
    // const { good } = feedback;
    if (countTotalFeedback() === 0) {
      return 0;
    } else {
      return Math.round((good / countTotalFeedback()) * 100);
    }
  };

  const options = ['good', 'neutral', 'bad'];
  // const countTotalFeedback = this.countTotalFeedback();
  // const countTotalFeedbackFunc = countTotalFeedback();
  // const countPositiveFeedbackPercentage =
  //   this.countPositiveFeedbackPercentage();
  return (
    <>
      <Section title="Please Leave Feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleOnClick} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};

// export const App = () => {
//
// };

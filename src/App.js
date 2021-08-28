import "./App.css";
import React, { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notofication from "./Statistics/Notification/Notification";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onClickFeedback = (e) => {
    const targetBtn = e.currentTarget.textContent.toLowerCase();
    this.setState((prevState) => ({
      [targetBtn]: prevState[targetBtn] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round(100 / (good + neutral + bad)) * good;
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="main-div">
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.onClickFeedback} />
        </Section>

        <Section title="Statistics">
          {good + neutral + bad === 0 ? (
            <Notofication />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;

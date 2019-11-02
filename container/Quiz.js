import * as React from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { purple, white, black } from '../utils/colors'
import TextButton from '../components/TextButton'
import BoxButton, {buttonType} from '../components/BoxButton';
import {QUESTIONS_VIEWS} from '../config';

export class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {
      view: QUESTIONS_VIEWS.QUESTION,
      questionIndex: 0,
      showScore: false
    };
    this.score = 0;
  }

  toggleView = () => {
    this.setState((state) => {
      return {view: state.view === QUESTIONS_VIEWS.ANSWER ? QUESTIONS_VIEWS.QUESTION : QUESTIONS_VIEWS.ANSWER};
    });
  }

  nextQuestion = () => {
    this.setState((state, props) => {
    const {selectedCard={}} = props;
    const {questions=[]} = selectedCard;
      const nextQuestionIndex = state.questionIndex + 1;
      return nextQuestionIndex ===  questions.length ? {showScore: true} : {questionIndex: nextQuestionIndex, view: QUESTIONS_VIEWS.QUESTION};
    });
  }

  handleCorrectAnswer = () => {
    this.score++; 
    this.nextQuestion();
  }

  handleIncorrectAnswer = () => {
    this.nextQuestion();
  }

  getQuestion = (currentQuestion) => {
    const {view} = this.state;
    if (view === QUESTIONS_VIEWS.QUESTION) {
      return currentQuestion.question;
    } else {
      return currentQuestion.answer;
    }
  }

  renderButtons() {
    const {view} = this.state;
    if (view === QUESTIONS_VIEWS.QUESTION) {
      return null;
    }

    return [
        <BoxButton label={'Correct'} type={buttonType.SUCCESS} onPress={this.handleCorrectAnswer} />
        ,
        <BoxButton label={'Incorrect'} type={buttonType.ERROR} onPress={this.handleIncorrectAnswer} />

    ];
  }

  render() {
    const {selectedCard={}} = this.props;
    const {questions=[]} = selectedCard;
    const {questionIndex, view, showScore} = this.state;
    const currentQuestion = questions[questionIndex];
    return (
      showScore ? 
      <View style={styles.container}>
        <Text style={styles.question}>Score</Text>
        <Text style={styles.question}>{`${this.score}/${questions.length}`}</Text>
      </View>
      :
      <View style={styles.container}>
        <Text style={styles.question}>{this.getQuestion(currentQuestion)}</Text>
        <TextButton style={styles.flipButton} onPress={this.toggleView}>
          {view === QUESTIONS_VIEWS.QUESTION ? 'Answer' : 'Question'}
        </TextButton>
        {this.renderButtons()}
      </View>
    );
  }
}

export default connect((state) => {
  return {
    selectedCard: state.selectedCard
  }
})(Quiz);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  flipButton: {
    marginTop: 30,
    marginBottom: 30
  }
});

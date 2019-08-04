import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChoiceButtons from './components/ChoiceButtons';
import ChoiceCard from './components/ChoiceCard';
import Info from './components/Info';
import Header from './components/Header';
import CHOICES from './choices'
import {randomComputerChoice, getRoundOutcome} from './Utils'

export default class App extends React.Component {
  
    constructor(props) {
      super(props)
      this.state = {
        userChoice: {},
        computerChoice: {},
        result: 'Make your choice',
        total: 0,
        countWin: 0,
        countLose: 0,
        countTie: 0
      }
    }
  

  onChoicePress = (choice) => {
    const userChoice = CHOICES.find(item => item.name === choice)
    const computerChoice = randomComputerChoice()
    const result = getRoundOutcome(userChoice.name, computerChoice.name)
    
    const total = this.state.total + 1
    console.log(total)
    
    const countWin = getRoundOutcome(userChoice.name, computerChoice.name) === 'Victory!' ? this.state.countWin + 1 :  this.state.countWin
    const countLose = getRoundOutcome(userChoice.name, computerChoice.name) === 'Defeat!' ? this.state.countLose + 1 :  this.state.countLose
    const countTie = getRoundOutcome(userChoice.name, computerChoice.name) === 'Tie game!' ? this.state.countTie + 1 :  this.state.countTie
    
    this.setState({userChoice, computerChoice, result, total, countWin, countLose, countTie})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.header}>
          <Header result={this.state.result}/>
        </View>
        <View style = {styles.info}>
          <Info total = {this.state.total} 
          countWin = {this.state.countWin}
          countLose= {this.state.countLose}
          countTie= {this.state.countTie}
         />
        </View>
        <View style = {styles.playArea}>
          <View style = {styles.choicesContainer}>
              <ChoiceCard 
              playerName="YOU"
              choice={this.state.userChoice}/>
              <Text>VS</Text>
              <ChoiceCard 
              playerName="COMPUTER"
              choice={this.state.computerChoice}/>
          </View>
        </View>

        <View style = {styles.choiceButtons}>
          <View style = {styles.buttonContainer}>
            <ChoiceButtons onButtonPress={this.onChoicePress}/>
          </View>
        </View>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:
  {
    marginTop: 30,
    flex: 0.1,
  },
  info:
  {
    flex: 0.15,
    marginBottom: 10,
  },
  playArea:
  {
    flex: 0.55,
  },
  choiceButtons:
  {
    flex: 0.4,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  choicesContainer: {
    margin: 10,
    borderRadius: 20,
    paddingTop: 50,
    shadowRadius: 5,
    paddingBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    
    elevation: 11,
  },
  
});

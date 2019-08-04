import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Info = (props) => {
    
  
    return (
        <View style = {styles.infoWrapper}>
            <View style = {styles.infoCount}>
               <Text style={styles.infoText}>Total: {props.total}</Text>
            </View>       
            
            <View style = {styles.infoCount}>
            <Text style={styles.infoText}>Win: {props.countWin}</Text>
            <Text style={styles.infoText}>Lose: {props.countLose}</Text>
            <Text style={styles.infoText}>Tie: {props.countTie}</Text>
            </View>

            <View style = {styles.infoCount}>
            <Text style={styles.infoText}>Win: {Math.round(props.countWin/props.total * 100)}% </Text>
            <Text style={styles.infoText}>Lose: {Math.round(props.countLose/props.total * 100)}%</Text>
            <Text style={styles.infoText}>Tie: {Math.round(props.countTie/props.total * 100)}%</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    infoWrapper:
    {
        flex: 1,
        justifyContent: 'center',
    },
    infoCount:
    {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    infoText:
    {
        fontSize: 22,
        fontWeight: 'bold'
    }
})
export default Info


import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ChoiceCard = (props) => {
    const {choiceContainer, choiceCardTitle, choiceImage, choiceDescription} = styles
    return (
        <View style = {choiceContainer}>
            <Text style = {choiceCardTitle}>{props.playerName}</Text>
            <Image style = {choiceImage} source = {{uri: props.choice.uri}}/>
            <Text style = {choiceDescription}>{props.choice.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    choiceContainer: {
        flex: 1,
        alignItems: 'center',
      },
      choiceDescription: {
        fontSize: 25,
        color: '#640D14',
        fontWeight: 'bold',
        textShadowOffset: { height: 10, width: 8 },
      },
      choiceCardTitle: {
        fontSize: 25,
        color: '#250902'
      },
      choiceImage: {
        width: 100,
        height: 100,
        padding: 10,
      }
})
export default ChoiceCard

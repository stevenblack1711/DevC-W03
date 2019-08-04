import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const Header = (props) => {

    let textColor  = props.result === 'Victory!' ? 'green' : 'red'
    return (
        <View style = {styles.headerWrapper}>
            <Text style={[styles.headerText, {color: textColor}]}>{props.result}</Text>
            <Text style={styles.headerText}>{props.total}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerWrapper:
    {
        flex: 1,
        alignItems:'center',
        justifyContent: 'flex-end'
    },
    headerText:
    {
        fontSize: 22,
        fontWeight: 'bold'
    }
})
export default Header

import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../../theme/theme";

export const styles = StyleSheet.create({
    firstContainer: {
        flex: 45,
    },
    secondContainer: {
        flex: 55,
        backgroundColor: Colors.primaryColor,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    textEscanner: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        marginTop: 50,
        color: 'white'
    },
    button: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.secondColor,
        borderRadius: 10,
        height: 40,
        justifyContent: 'center',
        marginVertical: 35,
        width: 150,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',
    },
    spaceCode:{
        alignSelf: 'center',
        borderRadius: 20,
        borderWidth: 5,
        height: 200,
        width: 200,
        marginVertical: 25,
    }
});
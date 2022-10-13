import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../../theme/theme";

export const styles = StyleSheet.create({
    firstContainer: {
        flex: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
    },
    secondContainer: {
        flex: 70,
        marginTop: 100,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        justifyContent: 'center',
    },
    textEscanner: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        borderRadius: 20,
        borderWidth: 1,
        height: 50,
        margin: 12,
        textAlign: 'center',
        color: 'black'
    },
    button: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.primaryColor,
        borderRadius: 20,
        height: 50,
        margin: 12,
        width: 390,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        elevation: 8,
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',
    },
    spaceCode: {
        alignSelf: 'center',
        borderRadius: 20,
        borderWidth: 5,
        height: 200,
        width: 200,
        marginVertical: 25,
    },
    img: {
        width: '90%',
        height: 112,
    },
    thirdContainer: {
        flex: 15,
    },
    forgotPassword: {
        textAlign: 'center',
    }
});
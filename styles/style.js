import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      padding: 30,
      paddingBottom: 50,
      alignItems: 'center',
    },
    zonaDeMovimiento: {
      width: 300,
      height: 300,
      backgroundColor: 'EEEEEE',
      shadowColor: 'black',
      borderColor: "#edede9",
      borderWidth: 3,
      shadowOpacity: 0.2,
      shadowRadius: 8,
      borderRadius: 19,
      padding: 40,
      position: 'relative',
    },
    movingObject: {
      width: 30,
      height: 30,
      padding: 3,
      position: 'absolute',
    },
    randomObject: {
      width: 20,
      height: 20,
      position: 'absolute',
      borderRadius: 10,
    },
    granota: {
      width: 40,
      height: 40,
      position: 'absolute',
      borderRadius: 10,
    },
    buttonContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 1,
      marginBottom: 60,
    },
    button: {
      backgroundColor: 'EDEDED',
      color: "000",
      padding: 10,
      margin: 5,
      borderRadius: 20,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 7,
    },
    buttonR: {
      backgroundColor: 'EDEDED',
      color: "000",
      padding: 10,
      paddingTop: 1,
      paddingBottom:1,
      margin: 5,
      borderRadius: 20,
      margin: 10,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 7,
    },
    horizontalButtons: {
      flexDirection: 'row',
    },
  
    healthBarContainer: {
      width: 200,
      height: 20,
      backgroundColor: '#ddd',
      borderRadius: 10,
      marginBottom: 10,
    },
    healthBar: {
      height: '100%',
      borderRadius: 10,
  
    },
    healthText: {
      fontSize: 18,
      marginBottom: 10,
    },
    _vidasContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 50,
      justifyContent: 'center'
    },
    get vidasContainer() {
      return this._vidasContainer;
    },
    set vidasContainer(value) {
      this._vidasContainer = value;
    },


    iconContainer: {
      position: 'absolute',
      bottom: 50,
      right: 20,
      height: 40,
      width: 40,
      textAlign: "center",
      alignItems: "center",
      backgroundColor: '#dee2e6', // Cambia el color de fondo según tus necesidades
      borderRadius: 30, // Ajusta el radio de borde según tus necesidades
      padding: 10,
    },
  });
  

export default styles
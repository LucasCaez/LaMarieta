import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ButtonsControl({ vidas, ObjetoEnMovimiento, setVidas }) {
    
    return (
        <View style={{marginTop:40}}>
            <View style={vidas === 0 ? { display: "none" } : styles.buttonContainer}>
                <TouchableOpacity onPress={() => ObjetoEnMovimiento('up')} style={styles.button}>
                    <Icon name="arrow-up" size={30} color="#717171" />
                </TouchableOpacity>
                <View style={styles.horizontalButtons}>
                    <TouchableOpacity onPress={() => ObjetoEnMovimiento('left')} style={styles.button}>
                        <Icon name="arrow-left" size={30} color="#717171" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.vidasContainer}>
                        <Icon name={ "heart"} size={18} color={vidas === 1 ? "#AD4444" : "#5AAD44"} />
                        <Text style={{ color: "#717171", fontSize: 20, textAlign: "center", margin: 3 }}>{vidas === 0 ? null : vidas}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => ObjetoEnMovimiento('right')} style={styles.button}>
                        <Icon name="arrow-right" size={30} color="#717171" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => ObjetoEnMovimiento('down')} style={styles.button}>
                    <Icon name="arrow-down" size={30} color="#717171" />
                </TouchableOpacity>
            </View>
            <View style={vidas === 0 ? styles.buttonContainer : { display: "none" }}>
                <TouchableOpacity style={styles.buttonR} onPress={() => setVidas(3)}>
                    <Text style={{ color: "#717171", fontSize: 20, textAlign: "center", margin: 3, marginBottom: 103, marginTop: 30 }}>Reiniciar Joc</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

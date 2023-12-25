import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/style';

import Granota from '../assets/granota.png'
import Marieta from '../assets/marieta.png'
import MarietaMorta from '../assets/marieta_morta.png'
import Pugo from '../assets/pugo.png'

export default function ZonaDeMovimiento({ vidas, salud, posicion, posicionPugo, posicionGranota, pugoReset}) {
    return (
        <View>
    
    <View style={styles.container}>
                <Text style={styles.healthText}>{vidas?`La Marieta te ${vidas} vidas`:"La Marieta ha mort"} </Text>
                <View style={styles.healthBarContainer}>
                    <View style={{ ...styles.healthBar, width: `${salud}%`, backgroundColor: vidas === 0 ? 'red' : '#71EF4F', }} />
                </View>

            </View>
            <View style={styles.zonaDeMovimiento}>
                <Image source={Pugo} style={[styles.randomObject, { left: posicionPugo.x, top: posicionPugo.y }]} />
                <Image source={Granota} style={[styles.granota, { left: posicionGranota.x, top: posicionGranota.y }]} />
                <View />
                <Image
                    source={vidas === 0 ? MarietaMorta : Marieta}
                    style={[styles.granota, { left: posicion.x, top: posicion.y }]}
                />
            </View>
            
        </View>
    );
}

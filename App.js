import React, { useState, useEffect } from 'react';
import { View, StatusBar, Vibration, TouchableOpacity, Linking, Text } from 'react-native';
{/*eas build --platform android --profile androidapk*/ }
import styles from './styles/style'
import ButtonsControl from './components/ButtonsControl';
import ZonaDeMovimiento from './components/zonaDeMovimiento';

const squareSize = 300;
const minX = 0;
const minY = 0;
const maxX = squareSize - 50;
const maxY = squareSize - 50;

export const useGeneralEffect = () => {
  useEffect(() => {
    // Lógica del useEffect en el archivo general
    console.log('Efecto del archivo general ejecutado');
  }, []);
};

const App = () => {
  const [posicion, setposicion] = useState({ x: 0, y: 0 });
  const [posicionPugo, setposicionPugo] = useState({ x: Math.floor(Math.random() * (maxY - minY + 1)) + minY, y: Math.floor(Math.random() * (maxY - minY + 1)) + minX })
  const [pugoReset, setReset] = useState(0)
  const [posicionGranota, setposicionGranota] = useState({ x: Math.floor(Math.random() * (maxY - minY + 1)) + minY, y: Math.floor(Math.random() * (maxY - minY + 1)) + minX })
  const [vidas, setVidas] = useState(0);
  const [salud, setSalud] = useState(100);
  const [puntos, setPuntos] = useState(0)

  const ObjetoEnMovimiento = (direccio) => {
    let posicionX = posicion.x;
    let posicionY = posicion.y;

    switch (direccio) {
      case 'up': posicionY = Math.max(minY, posicionY - 10); break;
      case 'down': posicionY = Math.min(maxY, posicionY + 10); break;
      case 'left': posicionX = Math.max(minX, posicionX - 10); break;
      case 'right': posicionX = Math.min(maxX, posicionX + 10); break;
      default: break;
    }

    setReset(pugoReset + 1)
    if (pugoReset ==  Math.floor(Math.random() * (30 - 15 + 1) + 15)) {
      setposicionPugo({
        x: Math.floor(Math.random() * (maxX - minX + 1)) + minX,
        y: Math.floor(Math.random() * (maxY - minY + 1)) + minY
      });
      setReset(0)
    }
    if (pugoReset ==  Math.floor(Math.random() * (15 - 5 + 1) + 5)) {
      setposicionGranota({
        x: Math.floor(Math.random() * (maxX - minX + 1)) + minX,
        y: Math.floor(Math.random() * (maxY - minY + 1)) + minY
      });
    }
    const RangoDetectar = (value, target, range) => value >= target - range && value <= target + range;

    if (RangoDetectar(posicion.x, posicionPugo.x, 15) && RangoDetectar(posicion.y, posicionPugo.y, 15)) {
      setposicionPugo({
        x: Math.floor(Math.random() * (maxX - minX + 1)) + minX,
        y: Math.floor(Math.random() * (maxY - minY + 1)) + minY
      });

      Vibration.vibrate();

      setReset(0)

      setposicionGranota({
        x: Math.floor(Math.random() * (maxX - minX + 1)) + minX,
        y: Math.floor(Math.random() * (maxY - minY + 1)) + minY
      });

      if (vidas < 5) {
        setVidas((prevvidas) => prevvidas + 1);
      }
      setPuntos(puntos + 1);
    }



    if (RangoDetectar(posicion.x, posicionGranota.x, 15) && RangoDetectar(posicion.y, posicionGranota.y, 15)) {
      setposicionPugo({
        x: Math.floor(Math.random() * (maxX - minX + 1)) + minX,
        y: Math.floor(Math.random() * (maxY - minY + 1)) + minY
      });
      setposicionGranota({
        x: Math.floor(Math.random() * (maxX - minX + 1)) + minX,
        y: Math.floor(Math.random() * (maxY - minY + 1)) + minY
      });
      if (vidas < 5) {
        setVidas((prevvidas) => prevvidas - 1);
      }
      setPuntos(puntos + 1);
    }

    setposicion({ x: posicionX, y: posicionY });
  };

  useEffect(() => {
    if (vidas > 0) {
      const interval = setInterval(() => {
        setSalud((prevsalud) => Math.max(0, prevsalud - 10));
        if (salud <= 0) {
          setSalud(100);
          setVidas((prevvidas) => Math.max(0, prevvidas - 1));
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [salud, vidas]);
  

  return (

    <View style={styles.container}>

      <ZonaDeMovimiento vidas={vidas} salud={salud} posicion={posicion} posicionPugo={posicionPugo} posicionGranota={posicionGranota} pugoReset={pugoReset} />
      <ButtonsControl vidas={vidas} ObjetoEnMovimiento={ObjetoEnMovimiento} setVidas={setVidas} salud={salud} setSalud={setSalud} />
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.iconContainer} onPress={() => { Linking.openURL("https://lucascaez.es")}}>
        <Text>i</Text>
      </TouchableOpacity>

    </View >
  );

};



export default App;

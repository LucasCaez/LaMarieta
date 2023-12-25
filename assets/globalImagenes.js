import { Image } from 'expo-image'

import Granota from './granota.png'
import Marieta from './marieta.png'
import MarietaMorta from './marieta_morta.png'
import PugoImg from './pugo.png'

export function GranotaImg() {
  return (
      <Image source={Granota} 
      style={{ width: 50, height: 50 }}
      />
  );
}

export function MarietaImg() {
  return (
      <Image source={Marieta} 
      style={{ width: 50, height: 50 }}
      />
  );
}

export function MarietaMortaImg() {
  return (
      <Image source={MarietaMorta} 
      style={{ width: 50, height: 50 }}
      />
  );
}

export function Pugo() {
  return (
      <Image source={PugoImg} 
      style={{ width: 50, height: 50 }}
      />
  );
}
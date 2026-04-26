import { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

type FlameProps = {
  height: number;
  width: number;
  color: string;
  delay: number;
  duration: number;
  offsetX?: number;
};

function Flame({ height, width, color, delay, duration, offsetX = 0 }: FlameProps) {
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(anim, {
          toValue: 1,
          duration: duration,
          useNativeDriver: true,
        }),
        Animated.timing(anim, {
          toValue: 0,
          duration: duration,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const scale = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.85, 1],
  });

  const translateY = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -6],
  });

  const opacity = anim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.7, 1, 0.7],
  });

  return (
    <Animated.View
      style={[
        styles.flame,
        {
          height,
          width,
          backgroundColor: color,
          transform: [{ scaleY: scale }, { translateY }],
          opacity,
          marginHorizontal: offsetX,
        },
      ]}
    />
  );
}

export function FireFooter() {
  const flames = [
    // camada de base — vermelha, mais larga
    { height: 28, width: 22, color: '#8b0000', delay: 0,   duration: 600 },
    { height: 36, width: 18, color: '#8b0000', delay: 80,  duration: 700 },
    { height: 24, width: 20, color: '#8b0000', delay: 160, duration: 550 },
    { height: 38, width: 16, color: '#8b0000', delay: 240, duration: 680 },
    { height: 26, width: 22, color: '#8b0000', delay: 40,  duration: 620 },
    { height: 34, width: 18, color: '#8b0000', delay: 120, duration: 590 },
    { height: 28, width: 20, color: '#8b0000', delay: 200, duration: 660 },
    { height: 32, width: 16, color: '#8b0000', delay: 300, duration: 610 },
    { height: 30, width: 22, color: '#8b0000', delay: 60,  duration: 720 },
    { height: 36, width: 18, color: '#8b0000', delay: 140, duration: 580 },
    { height: 26, width: 20, color: '#8b0000', delay: 220, duration: 640 },
    { height: 40, width: 16, color: '#8b0000', delay: 10,  duration: 670 },
    { height: 28, width: 22, color: '#8b0000', delay: 180, duration: 600 },
    { height: 34, width: 18, color: '#8b0000', delay: 260, duration: 590 },
    { height: 24, width: 20, color: '#8b0000', delay: 90,  duration: 710 },
  ];

  const midFlames = [
    // camada do meio — laranja
    { height: 48, width: 14, color: '#cc3300', delay: 0,   duration: 500 },
    { height: 56, width: 12, color: '#cc3300', delay: 100, duration: 580 },
    { height: 42, width: 14, color: '#cc3300', delay: 200, duration: 520 },
    { height: 60, width: 10, color: '#cc3300', delay: 300, duration: 560 },
    { height: 50, width: 14, color: '#cc3300', delay: 50,  duration: 490 },
    { height: 44, width: 12, color: '#cc3300', delay: 150, duration: 610 },
    { height: 58, width: 14, color: '#cc3300', delay: 250, duration: 530 },
    { height: 46, width: 10, color: '#cc3300', delay: 350, duration: 570 },
    { height: 52, width: 14, color: '#cc3300', delay: 70,  duration: 500 },
    { height: 40, width: 12, color: '#cc3300', delay: 170, duration: 590 },
    { height: 62, width: 14, color: '#cc3300', delay: 270, duration: 510 },
    { height: 48, width: 10, color: '#cc3300', delay: 20,  duration: 560 },
    { height: 54, width: 14, color: '#cc3300', delay: 120, duration: 580 },
  ];

  const topFlames = [
    // ponta — laranja vivo
    { height: 70, width: 8,  color: '#ff6600', delay: 0,   duration: 420 },
    { height: 80, width: 6,  color: '#ff6600', delay: 120, duration: 480 },
    { height: 64, width: 8,  color: '#ff6600', delay: 240, duration: 440 },
    { height: 86, width: 6,  color: '#ff8800', delay: 360, duration: 400 },
    { height: 72, width: 8,  color: '#ff6600', delay: 60,  duration: 460 },
    { height: 68, width: 6,  color: '#ff8800', delay: 180, duration: 500 },
    { height: 82, width: 8,  color: '#ff6600', delay: 300, duration: 420 },
    { height: 74, width: 6,  color: '#ff8800', delay: 90,  duration: 470 },
    { height: 66, width: 8,  color: '#ff6600', delay: 210, duration: 450 },
    { height: 88, width: 6,  color: '#ffaa00', delay: 330, duration: 410 },
    { height: 76, width: 8,  color: '#ff6600', delay: 30,  duration: 490 },
  ];

  return (
    <View style={styles.container} pointerEvents="none">
      {/* sombra de gradiente */}
      <View style={styles.glow} />

      {/* camada base */}
      <View style={styles.row}>
        {flames.map((f, i) => (
          <Flame key={`b${i}`} {...f} />
        ))}
      </View>

      {/* camada do meio */}
      <View style={[styles.row, styles.midRow]}>
        {midFlames.map((f, i) => (
          <Flame key={`m${i}`} {...f} />
        ))}
      </View>

      {/* ponta */}
      <View style={[styles.row, styles.topRow]}>
        {topFlames.map((f, i) => (
          <Flame key={`t${i}`} {...f} />
        ))}
      </View>

      {/* base sólida */}
      <View style={styles.base} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 110,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  glow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#1a0000',
  },
  row: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  midRow: {
    paddingHorizontal: 8,
  },
  topRow: {
    paddingHorizontal: 16,
  },
  flame: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  base: {
    height: 14,
    backgroundColor: '#3d0000',
    width: '100%',
  },
});

import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type FeaturedCardProps = {
  title: string;
  subtitle: string;
  cover: string;
};

export default function FeaturedCard({ title, subtitle, cover }: FeaturedCardProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: cover }} style={StyleSheet.absoluteFillObject} />
      <View style={styles.overlay}>
        <View style={styles.info}>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
        <TouchableOpacity style={styles.playButton} activeOpacity={0.8}>
          <Ionicons name="play" size={28} color={colors.background} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
    height: 200,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: spacing.sm,
  },
  info: {
    gap: 4,
    flex: 1,
  },
  subtitle: {
    color: colors.foreground,
    opacity: 0.7,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.foreground,
    fontSize: 22,
    fontWeight: '900',
  },
  playButton: {
    backgroundColor: '#1DB954',
    borderRadius: 30,
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

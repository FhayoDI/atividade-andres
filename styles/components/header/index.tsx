import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://i.pravatar.cc/98' }}
        />
        <View style={styles.greeting}>
          <Text style={styles.hello}>Bom dia</Text>
          <Text style={styles.name}>Usuário</Text>
        </View>
      </View>
      <View style={styles.icons}>
        <Ionicons name="notifications-outline" size={24} color={colors.foreground} />
        <Ionicons name="settings-outline" size={24} color={colors.foreground} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  greeting: {
    gap: 2,
  },
  hello: {
    color: colors.foreground,
    opacity: 0.6,
    fontSize: 12,
  },
  name: {
    color: colors.foreground,
    fontSize: 16,
    fontWeight: '700',
  },
  icons: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
});

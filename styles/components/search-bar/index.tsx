import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import Feather from '@expo/vector-icons/Feather';
import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  return (
    <View style={styles.inputWrapper}>
      <Feather name="search" size={18} color={colors.foreground} style={{ opacity: 0.5 }} />
      <TextInput
        style={styles.input}
        placeholder="Artistas, músicas ou podcasts"
        placeholderTextColor={`${colors.foreground}55`}
        value={query}
        onChangeText={setQuery}
      />
      {query.length > 0 && (
        <TouchableOpacity onPress={() => setQuery('')}>
          <Feather name="x" size={16} color={colors.foreground} style={{ opacity: 0.5 }} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222222',
    borderRadius: 8,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    gap: spacing.xs,
  },
  input: {
    flex: 1,
    color: colors.foreground,
    fontSize: 14,
  },
});

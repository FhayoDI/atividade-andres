import { colors } from "@/constants/colors";
import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

type IconProps = {
  icon: ReactNode;
  title: string;
};

export default function Icon({ icon, title }: IconProps) {
  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    color: colors.foreground,
    fontSize: 12,
  },
});

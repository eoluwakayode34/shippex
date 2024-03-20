import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
interface ActionButtonProps {
  backgroundColor: string;
  icon: React.ReactNode;
  label: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  backgroundColor,
  icon,
  label,
}) => {
  return (
    <TouchableOpacity
      style={[styles.actionButton, {backgroundColor: backgroundColor}]}>
      <View style={styles.buttonContent}>
        {icon}
        <Text style={styles.buttonText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 14,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  buttonText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#fff',
  },
});

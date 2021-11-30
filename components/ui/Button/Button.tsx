import React, { ButtonHTMLAttributes, FC } from "react";
import { Button, Pressable, GestureResponderEvent } from "react-native";
import tailwind from "tailwind-rn";
import { Text } from "../../Themed";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}

const Btn: FC<BtnProps> = ({ text, className, onPress, disabled = false }) => {
  return (
    <Pressable
      disabled={disabled}
      style={tailwind(`button ${className}`)}
      onPress={onPress}
    >
      <Text>{text}</Text>
    </Pressable>
  );
};
export default Btn;

import { useField } from "formik";
import React, { FC, InputHTMLAttributes } from "react";
import cn from "classnames";
import tailwind from "tailwind-rn";
import { View, TextInput } from "react-native";
import { Text } from "../../Themed";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  onChange?: (...args: any[]) => any;
}

const Input: FC<InputProps> = ({
  label,
  className,
  onChange,
  ...props
}: any) => {
  const [field, meta] = useField(props);
  const selfRoot = `bg-primary py-2 px-6 w-full appearance-none transition duration-150 ease-in-out pr-10 border border-accent-3 text-accent-6`;
  const rootClassName = cn(selfRoot, {}, className);

  const handleOnChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value);
    }
    return null;
  };

  return (
    <View style={tailwind(`field`)}>
      <View style={tailwind(`control`)}>
        <Text>{label}</Text>
        <TextInput
          className={rootClassName}
          onChangeText={handleOnChange}
          {...field}
          {...props}
        />
        {meta.touched && meta.error ? (
          <Text style={tailwind("error")}>{meta.error}</Text>
        ) : null}
      </View>
    </View>
  );
};

export default Input;

import { Form, Formik } from "formik";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { RootState } from "../../../store/store";
import Input from "../../../components/ui/Input";
import { useSignInService } from "../store/services";
import { ErrorMessages } from "../../../objects/messages/ErrorMessages";
import Button from "../../../components/ui/Button";
import { StyleSheet, View, Text } from "react-native";
import tailwind from "tailwind-rn";
import Btn from "../../../components/ui/Button";

interface SignInForm {
  email: string;
  password: string;
}

const SignIn: FC = () => {
  const initialValues = {} as SignInForm;
  const signIn = useSignInService();
  const { loading } = useSelector((state: RootState) => state.auth);

  const schema = Yup.object().shape({
    email: Yup.string().email().required(ErrorMessages.required()),
    password: Yup.string()
      .min(6, ErrorMessages.mustBe(6, "characters"))
      .required(ErrorMessages.required()),
  });

  const onSubmit = ({ email, password }: SignInForm) => {
    signIn({ email, password });
  };

  return (
    <View>
      <View>
        <Text style={tailwind(`has-text-centered is-size-2 mb-3`)}>
          Sign Up
        </Text>
        {/* {error && <AlertMessage type="danger" msg={error} />} */}
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <View style={tailwind(`form`)}>
              <Input label="Email" className="input" name="email" type="text" />
              <Input
                label="Password"
                className="input"
                name="password"
                type="password"
              />
              <Btn
                text={loading ? "Loading" : "Sign Up"}
                className="is-primary is-fullwidth mt-5"
                disabled={loading}
              />
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default SignIn;

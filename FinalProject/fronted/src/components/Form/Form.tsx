import type { FormProps, FormValues } from "../../Types/formTypes";
import { useForm, type SubmitHandler } from "react-hook-form";
import { FieldColor } from "../../Types/formTypes";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as S from "./Form.styles";
import { useState } from "react";
import {
  NeatVisualizer,
  darkNeatConfig,
  lightNeatConfig,
} from "../NestVisualizer/NeatVisualizer";
import React from "react";

const Form: React.FC<FormProps> = ({
  header,
  info,
  formFields,
  handleSubmitClick,
  path,
}) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({ mode: "all" });

  const values = watch();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await handleSubmitClick(data);
      navigate(path);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`An error occurred: ${error.message}`);
      }
    }
  };

  const theme = useTheme();

  const neatConfig =
    theme.palette.mode === "dark" ? darkNeatConfig : lightNeatConfig;

  return (
    <>
      <NeatVisualizer config={neatConfig} />
      <S.card onSubmit={handleSubmit(onSubmit)}>
        <S.header>{header}</S.header>
        <S.text>{info}</S.text>
        {formFields.map((formField) => (
          <S.StyledTextField
            required={formField.required}
            label={formField.label}
            color={
              values[formField.name] &&
              (errors?.[formField.name]
                ? FieldColor.ErrorColor
                : FieldColor.SuccessColor)
            }
            {...register(formField.name, {
              validate: (value) =>
                formField.regex.test(value || "")
                  ? undefined
                  : "תווים לא חוקים",
            })}
          />
        ))}
        <S.formButton type="submit" variant="contained">
          {header}
        </S.formButton>
      </S.card>
    </>
  );
};

export default Form;

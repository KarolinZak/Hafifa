import { useForm, type SubmitHandler } from "react-hook-form";
import type { FormProps, FormValues } from "../../Types/Form.types";
import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { FieldColor } from "../../Types/Form.types";
import * as S from "./Form.styles";
import React from "react";
import { toast } from "react-toastify";

const Form: React.FC<FormProps> = ({
  header,
  info,
  formFields,
  handleSubmitClick,
  path,
}) => {
  const navigate = useNavigate();
  const [fieldColor, setFieldColor] = useState<FieldColor>(
    FieldColor.PrimaryColor
  );
  const [massage, setMassage] = useState<string>("");

  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await handleSubmitClick(data);
      navigate(path);
    } catch (error) {
      console.log("Error during form submission:", error);
      if (error instanceof Error) {
        toast.error(`An error occurred: ${error.message}`);
      }
    }
  };

  const handleTextFieldChange = (
    element: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    regex: RegExp
  ) => {
    if (regex.test(element.target.value)) {
      setFieldColor(FieldColor.SuccessColor);
    } else {
      setFieldColor(FieldColor.ErrorColor);
    }
  };

  return (
    <>
      <S.card onSubmit={handleSubmit(onSubmit)}>
        <S.header>{header}</S.header>
        <S.text>{info}</S.text>
        {formFields.map((formField) => (
          <S.StyledTextField
            required={formField.required}
            label={formField.label}
            color={fieldColor}
            {...register(formField.name, {
              onChange: (e) => {
                handleTextFieldChange(e, formField.regex);
              },
            })}
          />
        ))}
        <S.formButton type="submit" variant="contained">
          {header}
        </S.formButton>
        <S.text>{massage}</S.text>
      </S.card>
    </>
  );
};

export default Form;

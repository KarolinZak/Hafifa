import {
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from "react-hook-form";
import type {FormProps, FormValues } from "./Form.types";
import { FieldColor } from "./Form.types";
import * as S from "./Form.styles";
import { useState, type ChangeEvent } from "react";

const Form: React.FC<FormProps> = ({ header, info, formFields, handleSubmitClick }) => {
  const [fieldColor, setFieldColor] = useState<FieldColor>(
    FieldColor.PrimaryColor
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    handleSubmitClick(data);
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

  const onError: SubmitErrorHandler<FormValues> = (errors) =>
    window.alert(errors); // TODO: use onError better and validate()

  return (
    <>
      <S.card onSubmit={handleSubmit(onSubmit, onError)}>
        <S.header>{header}</S.header>
        <S.text>{info}</S.text>
        {formFields.map((formField) => (
          <S.StyledTextField
            required={formField.required} 
            label={formField.label}
            color={fieldColor}
            {...register(formField.name, {
                onChange: (e) => {
                  handleTextFieldChange(e, formField.regex)
                },
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

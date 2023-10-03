"use client";
import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";
interface ITextArea {
  name: string;
  value?: string;
  placeholder?: string;
  label?: string;
  rows?: number;
}

const FormTextArea = ({ name, rows, value, placeholder, label }: ITextArea) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input.TextArea
            rows={rows}
            placeholder={placeholder}
            defaultValue={value}
            {...field}
            value={value ? value : field.value}
          />
        )}
      />
      <small
        style={{
          color: "red",
        }}
      >
        {errorMessage}
      </small>
    </>
  );
};

export default FormTextArea;

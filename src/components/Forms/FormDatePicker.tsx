"use client";
import { DatePicker, DatePickerProps, Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import { getErrorMessageByPropertyName } from "@/utils/schema-validator";

interface UMDatePickerProps {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string;
  value?: Dayjs;
  label?: string;
  size?: "large" | "small";
}

const FormDatePicker = ({
  name,
  label,
  onChange,
  size = "large",
}: UMDatePickerProps) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, dateString);
  };

  return (
    <>
      {label ? label : null}
      <br />
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
          defaultValue={dayjs(field.value) || ""}
          size={size}
          onChange={handleOnChange}
          style={{ width: "100%" }}
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

export default FormDatePicker;

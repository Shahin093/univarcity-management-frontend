"use client";
import { DatePicker, DatePickerProps, Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
interface UMDatePickerProps {
  onChange?: (valueOne: Dayjs | null, valueTwo: string) => void;
  name: string;
  value?: Dayjs;
  label?: string;
  size?: "large" | "small";
}

const FormDatePicker = ({ name, onChange, label, size }: UMDatePickerProps) => {
  const { control, setValue } = useFormContext();
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
            value={dayjs(field.value) || ""}
            size={size}
            onChange={handleOnChange}
            style={{
              width: "100%",
            }}
          />
        )}
      />
    </>
  );
};

export default FormDatePicker;

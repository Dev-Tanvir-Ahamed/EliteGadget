import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
type TInputProps = {
  placeholder?: string;
  type?: string;
  name: string;
  required?: boolean;
};
const InputForm = ({
  name,
  type = "text",
  placeholder,
  required,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <div>
      {/* Render label separately */}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            {...field}
            type={type}
            required={required}
            placeholder={placeholder}
          />
        )}
      />
    </div>
  );
};

export default InputForm;

import type { OptionHTMLAttributes } from "react";

interface SelectOption extends OptionHTMLAttributes<HTMLOptionElement> {
  label: string;
  value: string;
}

const SelectOption = ({ label, value, ...rest }: SelectOption) => {
  return (
    <option value={value} {...rest}>
      {label}
    </option>
  );
};

export default SelectOption;

import { useState } from "react";

export const useForm = (initialState) => {
  const [formValues, setValue] = useState(initialState);

  return [
    formValues,
    (ev) => {
      const { name, value } = ev.target;
      setValue((currentValue) => ({ ...currentValue, [name]: value }));
    },
  ];
};

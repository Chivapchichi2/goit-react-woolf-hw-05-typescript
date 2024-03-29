import React, { useState, ChangeEvent } from "react";

export function FormComponent(): React.ReactElement {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}

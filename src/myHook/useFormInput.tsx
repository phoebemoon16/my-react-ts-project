import { useState } from "react";

export function useFormInput(initialValue: string) {
    const [value, setValue] = useState(initialValue)

    function handleChange(e: any) {
        setValue(e.target.value)
    }

    const inputValue = {
        value: value,
        onChange: handleChange
    }
    return inputValue
}
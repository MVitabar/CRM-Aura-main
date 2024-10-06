import type { InputNumberProps, ChangeEvent, FocusEvent } from "../../types/main"
import { useState } from "react"

function InputNumber(props: InputNumberProps) {
  const { id, name, label, placeholder, defaultValue, max, min, step, disabled, onChange, onBlur } = props
  const [value, setValue] = useState<number | string>(defaultValue ?? "")
  const isEmptyChange = !!onChange
  const isEmptyBlur = !!onBlur
  const isEmptyLabel = !!label

  const handlerOnChange = (node: ChangeEvent) => {
    const valueInput = node.target.valueAsNumber

    if (!isNaN(valueInput)) {

      if (min !== undefined && max !== undefined && valueInput >= min && valueInput <= max) {
        setValue(valueInput)
        isEmptyChange && onChange(node)
      }
      else if (min !== undefined && typeof max !== "number" && valueInput >= min) {
        setValue(valueInput)
        isEmptyChange && onChange(node)
      }
      else if (max !== undefined && typeof min !== "number" && valueInput <= max) {
        setValue(valueInput)
        isEmptyChange && onChange(node)
      }
      else if (max === undefined && min === undefined) {
        setValue(valueInput)
        isEmptyChange && onChange(node)
      }

    } else {
      setValue("")
      isEmptyChange && onChange(node)
    }
  }

  const handlerOnBlur = (node: FocusEvent) => {
    isEmptyBlur && onBlur(node)
  }

  return (
    <div className="group flex flex-col gap-0.5 text-sm/4.1">
      {
        isEmptyLabel &&
        <label
          className={`${disabled && "text-alabaster-300"} pl-1.1`}
          htmlFor={id ?? name}
        >
          {label}
        </label>
      }
      <input
        className="border border-alabaster-200 rounded-xs min-h-8.1 px-2.5 outline-offset-3 focus:outline-biloba-700 placeholder:text-alabaster-300 disabled:border-alabaster-75 disabled:bg-inherit"
        type="number"
        id={id ?? name}
        name={name}
        placeholder={placeholder}
        value={value}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onChange={handlerOnChange}
        onBlur={handlerOnBlur}
      />
    </div>
  )
}

export {
  InputNumber
}
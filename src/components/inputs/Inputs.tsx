import type { InputDataBasic, InputNumber } from "../../types/main"

export function InputNumber(data: InputNumber) {
  const { labelName, id, min, step, required, event } = data

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700" htmlFor={id}>
        {labelName}
      </label>
      <input
        className="mt-1 block w-full pl-2 rounded-md border-gray-300 focus:border-indigo-500"
        id={id}
        type="number"
        name={id}
        min={min ?? "0"}
        step={step ?? "0.01"}
        required={required}
        onChange={event}
      />
    </div>
  )
}

export function InputText(data: InputDataBasic) {
  const { labelName, id, required, event } = data

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700" htmlFor={id}>
        {labelName}
      </label>
      <input
        className="mt-1 block w-full pl-2 rounded-md border-gray-300 focus:border-indigo-500"
        id={id}
        type="text"
        name={id}
        required={required}
        onChange={event}
      />
    </div>
  )
}
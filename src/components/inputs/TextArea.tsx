import type { InputDataBasic } from "../../types/main"

export function TextArea(data: InputDataBasic) {
  const { labelName, id, required, event } = data

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700" htmlFor={id}>
        {labelName}
      </label>
      <textarea
        id={id}
        name={id}
        required={required}
        onChange={event}
      >
        {/* Texto default */}
      </textarea>
    </div>
  )
}
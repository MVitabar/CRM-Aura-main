import type { Select } from "../../types/Inputs"

export function Select(data: Select) {
  const { labelName, id, required, children, event } = data

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700" htmlFor={id}>
        {labelName}
      </label>
      <select
        name={id}
        id={id}
        required={required}
        onChange={event}
      >
        { children }
      </select>
    </div>
  )
}
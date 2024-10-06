import type { ButtonProps } from "../../types/main"

function ButtonDefault(props: ButtonProps) {
  const { type, disabled, children, onClick } = props
  const isEmptyChildren = !!children

  return (
    <button
      className="group flex items-center justify-center gap-1.1 min-h-8.1 px-4 rounded-xs font-medium text-sm bg-alabaster-75 hover:text-white hover:bg-biloba-700 active:text-white active:bg-biloba-950 disabled:text-alabaster-300 disabled:bg-alabaster-75"
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {isEmptyChildren && children}
    </button >
  )
}

function ButtonBorder(props: ButtonProps) {
  const { type, disabled, children, onClick } = props
  const isEmptyChildren = !!children

  return (
    <button
      className="group flex items-center justify-center gap-1.1 min-h-8.1 px-4 rounded-xs font-medium text-sm border border-alabaster-200 hover:bg-alabaster-75 active:text-white active:bg-alabaster-950 disabled:text-alabaster-300 disabled:border-alabaster-75 disabled:bg-transparent"
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {isEmptyChildren && children}
    </button>
  )
}

function ButtonEmpty(props: ButtonProps) {
  const { type, disabled, children, onClick } = props
  const isEmptyChildren = !!children

  return (
    <button
      className="group flex items-center justify-center gap-1.1 min-h-8.1 px-4 font-medium text-sm rounded-xs hover:bg-alabaster-75 active:text-white active:bg-alabaster-950 disabled:text-alabaster-300 disabled:bg-transparent"
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {isEmptyChildren && children}
    </button>
  )
}

export {
  ButtonDefault,
  ButtonBorder,
  ButtonEmpty
}
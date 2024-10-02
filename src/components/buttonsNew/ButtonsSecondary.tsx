import type { ButtonProps } from "../../types/main" 

function ButtonDefault({ type, disabled, children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-1.1 h-8.1 px-4 rounded-xs font-medium text-sm text-white bg-biloba-700 hover:bg-biloba-900 active:bg-biloba-950 disabled:bg-biloba-300"
      type={type}
      disabled={disabled}
    >
      {!!children && children}
    </button>
  )
}

function ButtonBorder({ type, disabled, children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center justify-center gap-1.1 h-8.1 px-4 rounded-full border border-alabaster-200 font-medium text-sm hover:bg-alabaster-75 active:text-white active:bg-alabaster-950  disabled:text-alabaster-300 disabled:border-alabaster-75 disabled:bg-transparent"
      type={type}
      disabled={disabled}
    >
      {!!children && children}
    </button>
  )
}

export {
  ButtonDefault,
  ButtonBorder,
}
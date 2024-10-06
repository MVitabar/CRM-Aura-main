import { ReactNode } from "react"

type State = [string | number, React.Dispatch<React.SetStateAction<string | number>>]
type Callback = { node?: ChangeEvent, state?: State }
type MouseEventHandler = React.MouseEventHandler<HTMLButtonElement>
type ChangeEvent = React.ChangeEvent<HTMLInputElement>
type FocusEvent = React.FocusEvent<HTMLInputElement>

interface InputProps {
  id?: string
  name: string
  label?: string
  placeholder?: string
  defaultValue?: string
  disabled?: boolean
  onChange?: (callback: ChangeEvent) => void
  onBlur?: (callback: FocusEvent) => void
}

interface ButtonProps {
  type?: "button" | "reset" | "submit"
  disabled?: boolean
  children?: ReactNode
  onClick?: MouseEventHandler
}

interface InputNumberProps extends InputProps {
  max?: number
  min?: number
  step?: number
}

export type {
  State,
  Callback,
  ChangeEvent,
  FocusEvent,
  InputNumberProps,
  ButtonProps,
}
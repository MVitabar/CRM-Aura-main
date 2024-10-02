import { ReactNode } from "react"

interface InputDataBasic {
  id: string,
  labelName: string,
  required: boolean,
  event: (e: any) => void,
  // ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
}

interface InputNumber extends InputDataBasic {
  min?: string,
  step?: string,
}

interface Select extends InputDataBasic {
  children?: JSX.Element[] | JSX.Element,
}

interface ButtonProps {
  type?: "button" | "reset" | "submit"
  disabled?: boolean
  children?: ReactNode
  onClick?: (value: any) => any
}

export type { InputDataBasic, InputNumber, Select, ButtonProps }
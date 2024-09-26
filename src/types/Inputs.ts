
export interface InputDataBasic {
  id: string,
  labelName: string,
  required: boolean,
  event: (e: any) => void,
  // ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
}

export interface InputNumber extends InputDataBasic {
  min?: string,
  step?: string,
}

export interface Select extends InputDataBasic {
  children?: JSX.Element[] | JSX.Element,
}
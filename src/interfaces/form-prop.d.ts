import { Control, FieldPath, FieldValues } from "react-hook-form";


export interface SelectValue<TId> {
  value: TId,
  text: string
}

export interface Props<T extends FieldValues> {
  control: Control<T>,
  name: FieldPath<T>,
  label: string,
  placeholder?: string,
  type?: string,
}

export interface SelectProps<T extends FieldValues, TId> {
  control: Control<T>,
  name: FieldPath<T>,
  label: string,
  values: SelectValue<TId>[]
}

export interface FileProps<T extends FieldValues> {
  control: Control<T>,
  name: FieldPath<T>,
  label: string,
  handlePreview: (e: React.ChangeEvent<HTMLInputElement>)=>void
}
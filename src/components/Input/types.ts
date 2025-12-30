export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  placeholder?: string
  type?: string
  hasError?: boolean
  errorText?: string
}

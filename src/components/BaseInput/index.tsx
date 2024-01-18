import {
  OptionalInputContainer,
  DefaultInputContainer,
  DefaultBaseInput,
} from './styles'

interface BaseInputProps {
  optional?: boolean
  width: number
  inputPlaceHolder: string
}

export function BaseInput({
  optional = false,
  width,
  inputPlaceHolder,
}: BaseInputProps) {
  return (
    <>
      {optional ? (
        // True
        <OptionalInputContainer>
          <DefaultBaseInput width={width} placeholder={inputPlaceHolder} />
        </OptionalInputContainer>
      ) : (
        // False
        <DefaultInputContainer>
          <DefaultBaseInput width={width} placeholder={inputPlaceHolder} />
        </DefaultInputContainer>
      )}
    </>
  )
}

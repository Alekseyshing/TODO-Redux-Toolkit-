import { SetStateAction } from "react"

export interface IInputField {
  text: string,
  setText: (value: SetStateAction<string>) => void,
  handleSubmit: () => void
}

export const InputField = ({ text, setText, handleSubmit }: IInputField) => {
  return (
    <label htmlFor="">
      <input
        type="text"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
        style={{ margin: '10px', padding: '3px' }}
      />
      <button
        onClick={handleSubmit}
      >
        Add todo
      </button>
    </label>
  )
}
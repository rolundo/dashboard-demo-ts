type Props = {
  enteredValue: string
}

export default function ConditionalRender({ enteredValue }: Props) {
  if (enteredValue) {
    return <h1>This component is now rendered!</h1>
  }

  return null
}

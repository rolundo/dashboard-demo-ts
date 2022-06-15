import React, { KeyboardEventHandler } from 'react'
import { components } from 'react-select'
import Createable from 'react-select/creatable'
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from 'react-sortable-hoc'
import { Option } from '../../types'

function arrayMove(array: Option[], from: number, to: number) {
  const slicedArray = array.slice()
  slicedArray.splice(
    to < 0 ? array.length + to : to,
    0,
    slicedArray.splice(from, 1)[0]
  )
  return slicedArray
}

const SortableMultiValue = SortableElement((props: any) => {
  // this prevents the menu from being opened/closed when the user clicks
  // on a value to begin dragging it. ideally, detecting a click (instead of
  // a drag) would still focus the control and toggle the menu, but that
  // requires some magic with refs that are out of scope for this example
  const onMouseDown = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }
  const innerProps = { ...props.innerProps, onMouseDown }
  return <components.MultiValue {...props} innerProps={innerProps} />
})

const SortableMultiValueLabel = SortableHandle((props: any) => (
  <components.MultiValueLabel {...props} />
))

const SortableSelect = SortableContainer(Createable)

const handleLetterOnlyInput = (e: any) => {
  if (!/^[a-z|Enter|Backspace]+$/.test(e.nativeEvent.key)) {
    e.preventDefault()
  }
}

type MultiSelectProps = {
  selected: Option[]
  setSelected: (e: Option[]) => void
}

export default function MultiSelectSort({
  selected,
  setSelected,
}: MultiSelectProps) {
  type Index = {
    oldIndex: number
    newIndex: number
  }

  const onSortEnd = ({ oldIndex, newIndex }: Index) => {
    const newValue = arrayMove(selected, oldIndex, newIndex)
    setSelected(newValue)
  }

  return (
    <SortableSelect
      //@ts-ignore
      id='sortable-createable-select'
      instanceId='sortable-createable-select'
      useDragHandle
      // react-sortable-hoc props:
      axis='xy'
      onSortEnd={onSortEnd}
      distance={4}
      // small fix for https://github.com/clauderic/react-sortable-hoc/pull/352:
      getHelperDimensions={({ node }) => node.getBoundingClientRect()}
      // react-select props:
      isMulti
      options={[]}
      value={selected}
      onChange={setSelected}
      components={{
        // @ts-ignore We're failing to provide a required index prop to SortableElement
        MultiValue: SortableMultiValue,
        MultiValueLabel: SortableMultiValueLabel,
      }}
      closeMenuOnSelect={true}
      noOptionsMessage={() => null}
      onKeyDown={handleLetterOnlyInput}
    />
  )
}

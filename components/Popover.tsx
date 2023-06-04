import React, { useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTextSelection } from '@/hooks/use-text-selection'

type Props = {
  children?: React.ReactNode
}

const Portal = ({ children }: Props) => {
  return createPortal(children, document.body)
}

export const Popover = ({ target }: { target?: HTMLElement }) => {
  const { isCollapsed, clientRect, textContent } = useTextSelection(target)
  console.log(textContent)

  if (clientRect == null || isCollapsed) return null

  return (
    <Portal>
      <button >
        share me
      </button>
    </Portal>
  )
}
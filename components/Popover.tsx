'use client'

import { useTextSelection } from '@/hooks/use-text-selection'
import React, { FunctionComponent, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode;
}


const Portal: FunctionComponent<PortalProps> = ({ children }: any) => {
  return createPortal(children, document.getElementById('text') as HTMLElement)
}

export const Popover = ({ target }: { target?: HTMLElement }) => {
  const { isCollapsed, clientRect } = useTextSelection(target)
  console.log(isCollapsed, clientRect)

  if (clientRect == null || isCollapsed) return null


  return <Portal>
    <button className={`absolute text-center text-white bg-blue-300 rounded top-[${clientRect.top - clientRect.height}] left-[${clientRect.x}] p-2`}>
      share me
    </button>
  </Portal>
}

interface DocProps {
  children?: React.ReactNode
}

export default function DocLayout({ children }: DocProps) {
  return (
    <>
      {children}
    </>
  )
}
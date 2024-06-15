function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p>Header</p>

      <div>{children}</div>

      <footer>Footer</footer>
    </>
  )
}

export default Layout

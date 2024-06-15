function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* welcome */}
      <section>
        <h2>Welcome to my website</h2>
      </section>

      <p>Header</p>

      <div>{children}</div>

      <footer>Footer</footer>
    </>
  )
}

export default Layout

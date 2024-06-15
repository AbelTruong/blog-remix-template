import Footer from './Footer'
import Header from './Header'
import TopBar from './TopBar'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* welcome */}
      <TopBar />

      <section>
        <Header />
      </section>

      <section>{children}</section>

      <section>
        <Footer />
      </section>
    </>
  )
}

export default Layout

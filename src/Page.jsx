import Header from "./Header"
import MainContent from "./MainContent"

function Footer() {
  return (
    <footer className="footer">
      <p>(C) 2023. ChaseDev. All rights reserved.</p>
    </footer>
  )
}

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default Page
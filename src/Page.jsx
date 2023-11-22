import reactLogo from './react.svg'

function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <img src={reactLogo} className="react-logo" alt="React Logo" />
        <ul className="nav-items">
          <li className="list-item">Pricing</li>
          <li className="list-item">About</li>
          <li className="list-item">Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>(C) 2023. ChaseDev. All rights reserved.</p>
    </footer>
  )
}

function MainContent() {
  return (
    <div className="container">
      <h2>Reasons to be excited about learning React:</h2>
      <ol>
        <li>Learning to code is fun!</li>
        <li>Start a new career!</li>
        <li>Technology is awesome!</li>
        <li>Tons of exciting opportunities!</li>
      </ol>
    </div>
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
import reactLogo from './react.svg'

export default function Header() {
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
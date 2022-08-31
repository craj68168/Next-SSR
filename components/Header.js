import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Web</span> News
      </h1>
      <p className={headerStyles.description}>
        Keeps Learning
      </p>
    </div>
  )
}

export default Header

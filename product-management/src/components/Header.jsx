const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Trang chủ</a>
          </li>
          <li>
            <a href="/products">Sản phẩm</a>
          </li>
          <li>
            <a href="/about">Giới thiệu</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

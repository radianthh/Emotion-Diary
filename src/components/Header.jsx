import "./Header.css";
const Header = ({ title, leftchild, rightchild }) => {
  return (
    <header className="Header">
      <div className="Header_left">{leftchild}</div>
      <div className="Header_center">{title}</div>
      <div className="Header_right">{rightchild}</div>
    </header>
  );
};

export default Header;

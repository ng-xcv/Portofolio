import "./menu.scss";

const showLi = (link, name, setMenuOpen) => {
   return (
      <li onClick={() => setMenuOpen(false)}>
         <a href={link}>{name}</a>
      </li>
   );
};

const Menu = ({ menuOpen, setMenuOpen }) => {
   return (
      <div className={"menu " + (menuOpen && "active")}>
         <ul>
            {showLi("#intro", "Intro", setMenuOpen)}
            {showLi("#portfolio", "Portfolio", setMenuOpen)}
            {showLi("#works", "Works", setMenuOpen)}
            {showLi("#testimonials", "Testimonials", setMenuOpen)}
            {showLi("#contact", "Contact", setMenuOpen)}
         </ul>
      </div>
   );
};

export default Menu;

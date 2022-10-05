import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

const Topbar = ({ menuOpen, setMenuOpen }) => {
   return (
      <div className={"topbar " + (menuOpen && "active")}>
         <div className="wrapper">
            <div className="left">
               <a href="#intro" className="logo">
                  Faytek.
               </a>
               <div className="itemContainer">
                  <Person className="icon" />
                  <span>+221 77 412 45 77</span>
               </div>
               <div className="itemContainer">
                  <Mail className="icon" />
                  <span>contact@faytek.net</span>
               </div>
            </div>
            <div className="right">
               <div
                  className="hamburger"
                  onClick={(e) => setMenuOpen(!menuOpen)}
               >
                  <span className="line1"></span>
                  <span className="line2"></span>
                  <span className="line3"></span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Topbar;

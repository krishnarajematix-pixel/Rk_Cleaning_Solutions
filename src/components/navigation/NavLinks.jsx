import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../constants/routes.js';

const NavLinks = ({ className = '', onLinkClick }) => {
  const location = useLocation();

  return (
    <nav className={className}>
      <ul className="flex flex-col md:flex-row gap-6 md:gap-8">
        {NAV_LINKS.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <li key={link.path}>
              <a
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.path);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    if (onLinkClick) onLinkClick();
                  }
                }}
                className="text-base font-medium text-gray-700 hover:text-teal-700 transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;


import Link from 'next/link';
import { useState } from 'react';
import { CgMenuRightAlt, CgClose } from 'react-icons/cg';

import { content } from './content';
import { Container, HeaderContent, LinksContainer } from './styles';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenu = () => setMenuIsOpen(!menuIsOpen);
  const handleLink = () => menuIsOpen && handleMenu();

  return (
    <Container>
      <HeaderContent>
        <Link href="/">
          <a title="Home">
            <span>{'{'}</span>R<span>{'}'}</span>
          </a>
        </Link>

        <button onClick={handleMenu}>
          {menuIsOpen ? <CgClose /> : <CgMenuRightAlt />}
        </button>

        <LinksContainer active={menuIsOpen}>
          {/* {content.map(({ label, url }) => (
            <li key={label}>
              <Link href={url}>
                <a onClick={handleLink}>{label}</a>
              </Link>
            </li>
          ))} */}
          <li key='Home'>
              <Link href='/'>
                <a onClick={handleLink}>Home</a>
              </Link>
            </li>
            <li key='Blog'>
              <Link href='/blog'>
                <a onClick={handleLink}>Blog</a>
              </Link>
            </li>
            <li key='Portfólio'>
              <Link href='/projects'>
                <a onClick={handleLink}>Portfólio</a>
              </Link>
            </li>
        </LinksContainer>
      </HeaderContent>
    </Container>
  );
};

export default Header;

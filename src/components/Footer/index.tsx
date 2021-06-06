import { SiGithub } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import { IoIosArrowUp } from 'react-icons/io';

import { SITE_NAME } from '../../config/app-config';

import { Container } from './styles';

const Footer = () => {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      <div>
        © 2021 - Feito com 💜 by <span>{SITE_NAME}</span>
      </div>

      <div>
        <a title="Email" href="mailto:rodrigoengelberg@gmail.com">
          <FiMail size={20} />
        </a>

        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/rodrigoengelberg/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SiLinkedin size={20} />
        </a>

        <a
          title="GitHub"
          href="https://github.com/rodrigoengelberg"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SiGithub size={20} />
        </a>

        <a title="Ir para o topo" onClick={backToTop}>
          <IoIosArrowUp size={20} />
        </a>
      </div>
    </Container>
  );
};

export default Footer;

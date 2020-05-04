import React, { useState, useEffect } from "react";
import logo from "../../assets/logo_header.svg";

import { Container, Content, Link } from "./styles";

export default function Header() {
  const [scrollPos, setScrollPos] = useState(0);

  function updateScroll() {
    setScrollPos(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", updateScroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container scrollPos={scrollPos}>
      <Content>
        <nav>
          <img src={logo} alt="Hermes_Logo" />
        </nav>

        <aside>
          <Link>Como Funciona?</Link>
          <Link>Preço</Link>
        </aside>
      </Content>
    </Container>
  );
}

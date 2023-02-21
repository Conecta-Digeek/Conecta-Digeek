import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <img
              className="mr-1 h-10 w-10 stroke-cyan-600"
              src="http://www.digeek.mx/assets/img/expositores/DigeekLogo.svg"
            ></img>
          }
          name="Conecta Digeek"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts">Blogs</NavMenuItem>
        <NavMenuItem href="/">Buscar</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };

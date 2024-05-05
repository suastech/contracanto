export default function Nav({isSpanish}) {
  return (
    <nav>
        {isSpanish?
        <ul >
            <li><a href="#Bienvenida">Coro</a></li>
            <li><a href="#musica">Música</a></li>
            <li><a href="#prensa">Prensa</a></li>
            <li><a href="#apoyar">Apoyar</a></li>
          </ul>
        :
          <ul >
          <li><a href="#Bienvenida">Choir</a></li>
          <li><a href="#musica">Music</a></li>
          <li><a href="#prensa">Press</a></li>
          <li><a href="#apoyar">Support</a></li>
          </ul>}
  </nav>
  )
}
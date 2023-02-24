import './Rodape.css'

const Rodape = () => {
  return (
    <footer className='footer'>
      <section>
        <a href='https://facebook.com' target='_blank' rel="noreferrer">
          <img src='/imagens/fb.png' alt='Facebook logo' />
        </a>
        <a href='https://twitter.com' target='_blank' rel="noreferrer">
          <img src='/imagens/tw.png' alt='Twitter logo' />
        </a>
        <a href='https://instagram.com' target='_blank' rel="noreferrer">
          <img src='/imagens/ig.png' alt='Instagram logo' />
        </a>
      </section>
      <img src='/imagens/logo.png' alt='Organo logo' />
      <p>Desenvolvido por Alura.</p>
    </footer>
  )
}

export default Rodape
import {logo} from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/mehmetalipasaoglu")}
          className="black-btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarizing with <br className="max-md:hidden" />
        <span className="green_gradient">OpenAI GPT</span>
      </h1>
      <h2 className="desc">
      Summzi is an open-source article summarizer.
      A web application that uses OpenAI GPT model to generate summaries of long documents.
      </h2>
    </header>
  )
}

export default Hero
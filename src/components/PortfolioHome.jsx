import Contact from './Contact';
import Footer from './Footer';
import Blog from './Blog';
import Projects from './Projects';
import About from './About';
import Header from './Header';
import IntroCard from './IntroCard';


const PortfolioHome = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 w-full pt-16 sm:pt-20 md:pt-24">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20">
          <IntroCard />
          <About />
          <Projects />
          <Blog />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  )
}


export default PortfolioHome

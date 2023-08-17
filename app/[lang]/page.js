import { getDictionary } from "@/lib/dictionary"
import Header from "./components/Header/Header"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

 
export default async function Page({ params: { lang } }) {
  const {navigation} = await getDictionary(lang) // en
  return <>
    <Header lng={lang}/>
    <main>
    <Hero lng={lang}/>
    <About lng={lang}/>
    <Projects lng={lang}/>
    <Contact lng={lang}/>
    </main>
    <Footer lng={lang}/>
  </>
}

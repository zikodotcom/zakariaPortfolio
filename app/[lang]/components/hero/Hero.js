
import { getDictionary } from "@/lib/dictionary";
import HeroC from "./HeroC";

export default async function Hero({ lng}) {
    const {hero} = await getDictionary(lng) 
  return (
    <>
    <HeroC hero={hero}/>
    </>
  )
}

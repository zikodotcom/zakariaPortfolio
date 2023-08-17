import { getDictionary } from "@/lib/dictionary";
import FooterC from "./FooterC";



export default async function Footer({ lng}) {
    const {hero,footer} = await getDictionary(lng) 
  return (
    <>
        <FooterC footer={footer} hero={hero}/>
    </>
  )
}
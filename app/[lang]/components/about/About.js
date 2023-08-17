import { getDictionary } from "@/lib/dictionary";
import AboutC from "./AboutC";


export default async function About({ lng}) {
    const {about} = await getDictionary(lng) 
  return (
    <>
        <AboutC about={about}/>
    </>
  )
}
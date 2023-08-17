
import { getDictionary } from "@/lib/dictionary";
import ContactC from "./ContactC";

export default async function Contact({ lng}) {
    const {contact} = await getDictionary(lng) 
  return (
    <>
    <ContactC contact={contact}/>
    </>
  )
}

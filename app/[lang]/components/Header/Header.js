
import { getDictionary } from "@/lib/dictionary";
import HeaderC from "./HeaderC";

export default async function Header({ lng}) {
    const {navigation} = await getDictionary(lng) 
  return (
    <>
    <HeaderC navigation={navigation}/>
    </>
  )
}

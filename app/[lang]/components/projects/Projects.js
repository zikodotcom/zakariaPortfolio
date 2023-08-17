import { getDictionary } from "@/lib/dictionary";
import ProjectC from "./ProjectC";


export default async function Projects({ lng}) {
    const {projects} = await getDictionary(lng) 
  return (
    <>
    <ProjectC projects={projects}/>
    </>
  )
}

import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"


interface Lesson {
  id: string,
  title: string,
}

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

function App() {
  // COMO É FEITO COM USEEFFECT
  //
  /* useEffect(() => {
     client.query({
       query: GET_LESSONS_QUERY,
     }).then(response => {
       console.log(response.data);
     })
   },[])
   */

  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY); //COMO É FEITO COM O USEQUERY DO APOLLO

  return (
    <ul>
      {data?.lessons.map(lesson => {  //? NO DATA POIS PODE RETORNAR COMO UNDEFINED
        return (
          <li key={lesson.id}>
            {lesson.title}
          </li>
        )
      })}
    </ul>
  )
}

/*
COMENTARIO GIT

tailwindcss
graphql
graphcms (headless cms)
*/

export default App

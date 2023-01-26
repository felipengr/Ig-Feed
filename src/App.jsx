import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/felipengr.png",
      name: 'Felipe Nogueira',
      role: 'Web Developer'
    },
    content: [
      { type : 'paragraph', content: 'Fala galeraa 👋' },
      { type : 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type : 'link', content: '👉 jane.design/doctorcare' },             
    ],
    publichedAt: new Date('2023-01-26 17:14:36')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: 'Diego Fernandes',
      role: 'CTO Rocketseat'
    },
    content: [
      { type : 'paragraph', content: 'Fala galeraa 👋' },
      { type : 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type : 'link', content: '👉 jane.design/doctorcare' },             
    ],
    publichedAt: new Date('2023-01-24 17:14:36')
  },
]

 export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publichedAt={post.publichedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

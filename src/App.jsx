import { Header } from "./components/Header";
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";

import './global.css'
import styles from './App.module.css'

 export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author={'Felipe Nogueira'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non lorem orci. Nam aliquet ante ac iaculis dignissim. Aliquam eu urna a metus auctor interdum vitae in mauris. Praesent commodo aliquam feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
          <Post author={'Fernanda Campagnolo'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non lorem orci. Nam aliquet ante ac iaculis dignissim. Aliquam eu urna a metus auctor interdum vitae in mauris. Praesent commodo aliquam feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
        </main>
      </div>
    </>
  )
}

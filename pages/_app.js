// _app.js is the top component where you can pass everything donw from 
import "../styles/auth.css";
import "../styles/chats.css";
import "../styles/index.css";

import { ContextProvider } from '../context'


export default function App({ Component, pageProps }) {
  return (
      <ContextProvider>
    <Component {...pageProps} />
      </ContextProvider>
  );
}

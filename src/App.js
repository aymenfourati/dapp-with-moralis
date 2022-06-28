import React, {useState} from 'react';
import Post from './components/Post';
import { ConnectButton, Button, BannerStrip} from "web3uikit";
import "./App.css"
import { isVisible } from '@testing-library/user-event/dist/utils';

function App() {

  const [postvis,setPostvis] = useState("false");


  return (
    <div className="App">
      <div className="Header">
         <ConnectButton />
      </div>

      <div

  style={{
    height: '60px',
    transform: 'scale(1)'
  }}
>

  <BannerStrip
    text="Welcome to our website ! "
    type="standard"
  />

</div>
      <Button
  id="test-button-primary"
  onClick={ () => {
    setPostvis("true")
  }
  }
  text="Post a publication"
  theme="primary"
  type="button"
/>
{postvis === "true" && <Post />}

    </div>
  );
  
}

export default App;
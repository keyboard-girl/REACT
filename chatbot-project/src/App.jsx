import { useState } from 'react'
//import reactLogo from './assets/react.svg' ASI CUANDO SEA UNA CARPETA DIFERENTE A NODE_MODULES
//import viteLogo from '/vite.svg'
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';
//importo imagenes etc


import './App.css' //Vite permite importar archivos y paquetes (a diferencia de react normal)

      
      //COMPORTAMIENTOS Y COMPONENTES
      

      function App(){

        //STATE de los mensajes-----
        const [chatMessages, setChatMessages] = useState(//SINTAXIS PARA CONVERTIR A STATE
        []);

        //estructura DOM a renderizar

        return(
           <div className="app-container">
            
            <ChatMessages
              chatMessages={chatMessages} 
            />

            <ChatInput 
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />  
            
          </div>
        );
      }


export default App

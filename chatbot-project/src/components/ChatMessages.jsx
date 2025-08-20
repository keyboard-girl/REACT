import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import './ChatMessages.css'

export function ChatMessages({chatMessages}){//OJO: para recibir parametro === Deconstruccion
        /*
        const chatMessages = array[0]; //Estado Actual
        const setChatMessages = array[1]; //Funcion Actualizadora, nombre por convencion
        */

        const chatMessageRef = useRef(null)

        useEffect( () => {//OJO: TIENE Q SER FUNCION FLECHA
          
          //obtener el objeto conectado
          const containerElem = chatMessageRef.current;

          if(containerElem){//si el elem html existe

            //el top del scroll del div toma el valor de la altura del portview
            //es decir va al fondo
            containerElem.scrollTop = containerElem.scrollHeight
          }
          
        },[chatMessages]);//ARRAY DE DEPENDENCIAS


      return (//retorno el html que retorna (2)la funcion dentro de la funcion (3) .map(()=>...)

        <div className="chat-messages-container"
            ref={chatMessageRef}>
          
          {chatMessages.map((chatMessage)=>{

              return (
                <ChatMessage 
                  message={chatMessage.message} 
                  sender={chatMessage.sender} 
                  key={chatMessage.id} 
                  
                />
              );
            })}        
        </div>
      );


      }

      //OTRA FORMA DE EXPORTAR: Default Export -> exporta todo el archivo, no solo UNA function
    //export default ChatMessages; 
    // + import ChatMessages from './components/ChatMessages'
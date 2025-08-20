import { useState } from "react";
import { Chatbot } from "supersimpledev";
import './ChatInput.css'

export function ChatInput({chatMessages, setChatMessages}){
        const [inputText, setInputText] = useState('');

        // 1) Funcion OnChange -> actualiza valor inputText
        function saveInputText(event){
          const newMessage = event.target.value;
          setInputText(newMessage);
        }

        // 2) Funcion OnClick -> añade nuevo mensaje (con el inputText) a state chatMessages 
        
        function sendMessage(){
        
          const newChatMessage = [... chatMessages, //Operador de DISPERSION (mismos datos de chatMessages + el nuevo {...})
            {
              message: inputText, //se inserta el nuevo valor ya actualizado con saveInputText
              sender: 'user',
              id: crypto.randomUUID() //Metodo que crea un ID unico
            }
          ];

          setChatMessages(newChatMessage);

          const response = Chatbot.getResponse(inputText)
          
          

          //OJO: si no guardo, este estado sobreescribe el anterior
          setChatMessages([... newChatMessage, //Operador de DISPERSION (mismos datos de chatMessages + el nuevo {...})
            {
              message: response, //se inserta el nuevo valor ya actualizado con saveInputText
              sender: 'robot',
              id: crypto.randomUUID() //Metodo que crea un ID unico
            }
          ]);
        
          setInputText('');//Para resetear input

        } 
        
        return (
        <div className="chat-input-container">
          
          <input 
            type="text" 
            placeholder="Send a message to ChatBot" 
            size="30"
            onChange={saveInputText}
            value={inputText} //Para resetear input
            className="chat-input"
          />
          <button 
            onClick={sendMessage} 
            className="send-button"
          >send Message</button>
        </div>
        );
      }

      
import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import { NewChatForm } from 'react-chat-engine';  // Import NewChatForm

const ChatList = (props) => {
  const { chats, activeChat, setActiveChat, userName } = props;

  return (
    <div className="chat-list">
      {/* Example Chat List rendering code */}
      {chats && Object.keys(chats).map((chatId, index) => {
        const chat = chats[chatId];
        return (
          <div 
            key={`chat_${index}`} 
            onClick={() => setActiveChat(chatId)}
            className={`chat-list-item ${activeChat === chatId ? 'active' : ''}`}
          >
            <div className="chat-title">{chat.title}</div>
            <div className="chat-subtitle">
              {chat.people.map((person) => ` ${person.person.username}`).join(', ')}
            </div>
          </div>
        );
      })}

      {/* Render NewChatForm */}
      <div className="new-chat-form-container">
        <NewChatForm {...props} />
      </div>
    </div>
  );
};

export default ChatList;

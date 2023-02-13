import { View, Text } from 'react-native'
import React,{useState,useCallback,useEffect} from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

const ChatScreen = () => {
  
  //Variables
  const [messages,setMessages]  = useState("");

  //Function create message
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  //Function send message
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}

export default ChatScreen
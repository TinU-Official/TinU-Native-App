import { ChatBottomSheet, ChatText } from "@/components/chat/ChatBottomSheet";
import { ChatScreen } from "@/components/chat/ChatScreen";
import { MoreButton } from "@/components/chat/MoreButton";
import { ProductInfo } from "@/components/chat/ProductInfo";
import { BackButton } from "@/components/common/BackButton";
import { Header } from "@/components/common/Header";

import styled from "@emotion/native";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const mock = {
  nickname: "test",
};

const mockChatList: ChatText[] = [
  {
    id: "1",
    message: "안녕하숑",
    timestamp: Date.now(),
    isUser: false,
  },
  {
    id: "2",
    message: "세숑이숑",
    timestamp: Date.now(),
    isUser: true,
  },
  {
    id: "3",
    message: "안녕하숑",
    timestamp: Date.now(),
    isUser: false,
  },
  {
    id: "4",
    message: "세숑이숑",
    timestamp: Date.now(),
    isUser: true,
  },
  {
    id: "5",
    message: "인녕하숑",
    timestamp: Date.now(),
    isUser: false,
  },
  {
    id: "6",
    message: "세숑이숑",
    timestamp: Date.now(),
    isUser: true,
  },
  {
    id: "7",
    message: "안녕하숑",
    timestamp: Date.now(),
    isUser: false,
  },
  {
    id: "8",
    message: "세숑이숑",
    timestamp: Date.now(),
    isUser: true,
  },
  {
    id: "9",
    message: "안녕하숑",
    timestamp: Date.now(),
    isUser: false,
  },
  {
    id: "10",
    message: "세숑이숑",
    timestamp: Date.now(),
    isUser: true,
  },
];

export default function Chat() {
  const { height } = useWindowDimensions();
  const [chatList, setChatList] = useState(mockChatList);

  const handleSendChat = (chat: ChatText) => {
    setChatList((prev) => [...prev, chat]);
  };

  const handleSendMessage = (text: string) => {
    const newMessage: ChatText = {
      id: String(Date.now()),
      message: text,
      timestamp: Date.now(),
      isUser: true,
    };
    setChatList((prev) => [...prev, newMessage]);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ChatPageWrapper style={{ height, flex: 1 }}>
          <Header
            isSticky
            left={<BackButton link="chat-list" />}
            center={<Nickname>{mock.nickname}</Nickname>}
            right={<MoreButton />}
          />
          <ProductInfo />
          <ChatScreenContainer>
            <ChatScreen messages={chatList} onSendMessage={handleSendMessage} />
          </ChatScreenContainer>
          <ChatBottomSheet handleSendChat={handleSendChat} />
        </ChatPageWrapper>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const ChatPageWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  width: 100%;
`;

const ChatScreenContainer = styled.View`
  flex: 1;
  margin-top: 130px;
  z-index: 1;
`;

const Nickname = styled.Text`
  ${({ theme }) => theme.fonts.subtitle1_sb_16}
  color: ${({ theme }) => theme.colors.grey_12};
`;

import styled from "@emotion/native";
import React from "react";
import { ChatText } from "./ChatBottomSheet";
import { ReceiverChatBubble } from "./ReceiverChatBubble";
import { SenderChatBubble } from "./SenderChatBubble";

interface DailyChatGroupProps {
  chatList: ChatText[];
}

export function DailyChatGroup({ chatList }: DailyChatGroupProps) {
  return (
    <DailyChatGroupWrapper>
      <DateText>2024년 10월 1일 (월)</DateText>
      <ChatListWrapper>
        {chatList.map((chat) => {
          return (
            <ChatBubbleWrapper key={chat.id} style={{ justifyContent: chat.isUser ? "flex-end" : "flex-start" }}>
              {chat.isUser ? (
                <SenderChatBubble chatText={chat.message} />
              ) : (
                <ReceiverChatBubble
                  chatText={chat.message}
                  profileImg={require("@/assets/imgs/img_dummy_profile.png")}
                />
              )}
            </ChatBubbleWrapper>
          );
        })}
      </ChatListWrapper>
    </DailyChatGroupWrapper>
  );
}

const DailyChatGroupWrapper = styled.View`
  width: 100%;
  align-items: center;
`;

const DateText = styled.Text`
  ${({ theme }) => theme.fonts.label1_m_12}
  color: ${({ theme }) => theme.colors.grey_6};
`;

const ChatListWrapper = styled.View`
  flex-direction: column;
  gap: 18px;
  width: 100%;
  margin-top: 25px;
`;

const ChatBubbleWrapper = styled.View`
  flex-direction: row;
  width: 100%;
`;

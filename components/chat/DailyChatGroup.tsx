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
        {chatList.map((chat, index) => {
          const isReceiver = index % 2 === 0;
          return (
            <ChatBubbleWrapper key={chat.id} style={{ justifyContent: isReceiver ? "flex-start" : "flex-end" }}>
              {isReceiver ? (
                <ReceiverChatBubble chatText={chat.message} profileImg="https://via.placeholder.com/30" />
              ) : (
                <SenderChatBubble chatText={chat.message} />
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

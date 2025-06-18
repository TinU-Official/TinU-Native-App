import styled from "@emotion/native";
import { Text, View } from "react-native";
import { ChatMessage } from "../../types/chat";

interface ChatBubbleProps {
  message: ChatMessage;
}

export function ChatBubble({ message }: ChatBubbleProps) {
  return (
    <BubbleContainer isUser={message.isUser}>
      <BubbleText isUser={message.isUser}>{message.text}</BubbleText>
      <TimeText>{new Date(message.timestamp).toLocaleTimeString().slice(0, -3)}</TimeText>
    </BubbleContainer>
  );
}

const BubbleContainer = styled(View)<{ isUser: boolean }>`
  flex-direction: ${({ isUser }) => (isUser ? "row-reverse" : "row")};
  align-items: flex-end;
  margin: 8px 16px;
  gap: 8px;
`;

const BubbleText = styled(Text)<{ isUser: boolean }>`
  max-width: 70%;
  padding: 12px 16px;
  border-radius: 20px;
  background-color: ${({ isUser }) => (isUser ? "#14C3BC" : "#F5F5F5")};
  color: ${({ isUser }) => (isUser ? "#FFFFFF" : "#333333")};
  font-size: 14px;
`;

const TimeText = styled(Text)`
  font-size: 11px;
  color: #999999;
`;

import styled from "@emotion/native";

interface SenderChatBubbleProps {
  chatText: string;
}

export function SenderChatBubble({ chatText }: SenderChatBubbleProps) {
  return (
    <SenderChatBubbleContainer>
      <TimeText>오전 10:00</TimeText>
      <SenderChatBubbleWrapper>
        <SenderChatBubbleText>{chatText}</SenderChatBubbleText>
      </SenderChatBubbleWrapper>
    </SenderChatBubbleContainer>
  );
}

const SenderChatBubbleContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  gap: 3px;
`;

const SenderChatBubbleWrapper = styled.View`
  padding: 9px 12px;
  max-width: 240px;

  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.mint_500};
`;

const SenderChatBubbleText = styled.Text`
  ${({ theme }) => theme.fonts.subtitle3_r_16}
  color: ${({ theme }) => theme.colors.white};
`;

const TimeText = styled.Text`
  ${({ theme }) => theme.fonts.caption1_m_11}
  color: ${({ theme }) => theme.colors.grey_5};
`;

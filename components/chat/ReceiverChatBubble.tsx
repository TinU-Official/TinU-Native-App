import styled from "@emotion/native";
import { Image } from "react-native";

interface ReceiverChatBubbleProps {
  chatText: string;
  profileImg: string;
}

export function ReceiverChatBubble({ chatText, profileImg }: ReceiverChatBubbleProps) {
  return (
    <ReceiverChatBubbleContainer>
      <ReceiverProfileImage source={{ uri: profileImg }} />
      <FlexEndAlignBox>
        <ReceiverChatBubbleWrapper>
          <ReceiverChatBubbleText>{chatText}</ReceiverChatBubbleText>
        </ReceiverChatBubbleWrapper>
        <TimeText>오전 10:00</TimeText>
      </FlexEndAlignBox>
    </ReceiverChatBubbleContainer>
  );
}

const ReceiverChatBubbleContainer = styled.View`
  flex-direction: row;
  gap: 6px;
`;

const ReceiverProfileImage = styled(Image)`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

const FlexEndAlignBox = styled.View`
  flex-direction: row;
  align-items: flex-end;
  gap: 3px;
`;

const ReceiverChatBubbleWrapper = styled.View`
  padding: 9px 12px;
  max-width: 240px;

  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const ReceiverChatBubbleText = styled.Text`
  ${({ theme }) => theme.fonts.subtitle3_r_16}
  color: ${({ theme }) => theme.colors.black};
`;

const TimeText = styled.Text`
  ${({ theme }) => theme.fonts.caption1_m_11}
  color: ${({ theme }) => theme.colors.grey_5};
`;

import IcAirplaneGrey from "@/assets/icons/ic_airplane_grey.svg";
import IcAirplaneMint from "@/assets/icons/ic_airplane_mint.svg";
import IcPlus from "@/assets/icons/ic_plus.svg";
import styled from "@emotion/native";
import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

export interface ChatText {
  id: string;
  message: string;
  timestamp: number;
  isUser?: boolean; // Optional for backward compatibility
}

interface ChatBottomSheetProps {
  handleSendChat: (chat: ChatText) => void;
}

export function ChatBottomSheet({ handleSendChat }: ChatBottomSheetProps) {
  const [chattingInputValue, setChattingInputValue] = useState<string>("");

  const handleChangeChattingInput = (text: string) => {
    setChattingInputValue(text);
  };

  const handleClickPlusButton = () => {
    // 아무 동작도 하지 않음
  };

  const handleClickSendButton = () => {
    if (chattingInputValue.trim()) {
      const newChat: ChatText = {
        id: Date.now().toString(),
        message: chattingInputValue,
        timestamp: Date.now(),
        isUser: true,
      };
      handleSendChat(newChat);
      setChattingInputValue("");
    }
  };

  return (
    <ChatBottomSheetWrapper>
      <OpenBottomSheetButton onPress={handleClickPlusButton}>
        <IcPlus width={16} height={16} />
      </OpenBottomSheetButton>
      <ChattingInputBox>
        <ChattingInput
          value={chattingInputValue}
          onChangeText={handleChangeChattingInput}
          placeholder="메세지 보내기"
          placeholderTextColor="#9b9b9b"
          multiline={false}
        />
        <SendButton onPress={handleClickSendButton}>
          {chattingInputValue.length === 0 ? (
            <IcAirplaneGrey width={20} height={20} />
          ) : (
            <IcAirplaneMint width={20} height={20} />
          )}
        </SendButton>
      </ChattingInputBox>
    </ChatBottomSheetWrapper>
  );
}

const ChatBottomSheetWrapper = styled(View)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 68px;
  padding: 0 13px;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding-top: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 10;
`;

const OpenBottomSheetButton = styled(TouchableOpacity)`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.grey_2};
  justify-content: center;
  align-items: center;
`;

const ChattingInputBox = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  height: 32px;
  padding: 0 14px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.grey_2};
`;

const ChattingInput = styled(TextInput)`
  flex: 1;
  ${({ theme }) => theme.fonts.body3_r_14}
  color: ${({ theme }) => theme.colors.grey_12};
  padding: 0;
`;

const SendButton = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
`;

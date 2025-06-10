import IcAirplaneGrey from "@/assets/icons/ic_airplane_grey.svg";
import IcAirplaneMint from "@/assets/icons/ic_airplane_mint.svg";
import IcCamera from "@/assets/icons/ic_camera.svg";
import IcPlus from "@/assets/icons/ic_plus.svg";
import styled from "@emotion/native";
import { useEffect, useRef, useState } from "react";
import { Animated, TextInput, TouchableOpacity } from "react-native";

export interface ChatText {
  id: string;
  message: string;
  timestamp: number;
}

interface ChatBottomSheetProps {
  isBottomSheetOpen: boolean;
  handleSendChat: (chat: ChatText) => void;
  closeBottomSheet: VoidFunction;
  toggleBottomSheet: VoidFunction;
}

export function ChatBottomSheet({
  isBottomSheetOpen,
  handleSendChat,
  closeBottomSheet,
  toggleBottomSheet,
}: ChatBottomSheetProps) {
  const [chattingInputValue, setChattingInputValue] = useState<string>("");
  const animatedHeight = useRef(new Animated.Value(68)).current;

  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: isBottomSheetOpen ? 278 : 68,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isBottomSheetOpen, animatedHeight]);

  const handleChangeChattingInput = (text: string) => {
    setChattingInputValue(text);
  };

  const handleClickPlusButton = () => {
    toggleBottomSheet();
  };

  const handleFocus = () => {
    closeBottomSheet();
  };

  const handleClickSendButton = () => {
    if (chattingInputValue.trim()) {
      const newChat: ChatText = {
        id: Date.now().toString(),
        message: chattingInputValue,
        timestamp: Date.now(),
      };
      handleSendChat(newChat);
      setChattingInputValue("");
    }
  };

  const handleClickImageUpload = () => {
    // TODO: expo-image-picker 구현
    console.log("Image upload clicked");
  };

  return (
    <ChatBottomSheetWrapper style={{ height: animatedHeight }}>
      <ChatBottomSheetClosedSection>
        <OpenBottomSheetButton onPress={handleClickPlusButton}>
          <IcPlus width={16} height={16} />
        </OpenBottomSheetButton>
        <ChattingInputBox>
          <ChattingInput
            value={chattingInputValue}
            onChangeText={handleChangeChattingInput}
            onFocus={handleFocus}
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
      </ChatBottomSheetClosedSection>
      {isBottomSheetOpen && (
        <ButtonListWrapper>
          <SelectImageButton onPress={handleClickImageUpload}>
            <CameraIconWrapper>
              <IcCamera width={24} height={24} />
            </CameraIconWrapper>
            <SelectImageButtonText>이미지 전송</SelectImageButtonText>
          </SelectImageButton>
        </ButtonListWrapper>
      )}
    </ChatBottomSheetWrapper>
  );
}

const ChatBottomSheetWrapper = styled(Animated.View)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 0 13px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 10;
`;

const ChatBottomSheetClosedSection = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-top: 16px;
`;

const OpenBottomSheetButton = styled(TouchableOpacity)`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.grey_2};
  justify-content: center;
  align-items: center;
`;

const ChattingInputBox = styled.View`
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

const ButtonListWrapper = styled.View`
  padding: 0 42px;
  margin-top: 23px;
`;

const SelectImageButton = styled(TouchableOpacity)`
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const CameraIconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.grey_3};
`;

const SelectImageButtonText = styled.Text`
  ${({ theme }) => theme.fonts.body4_sb_13}
  color: ${({ theme }) => theme.colors.grey_9};
`;

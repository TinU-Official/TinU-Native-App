import styled from "@emotion/native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Platform, TextInput, TouchableOpacity, View } from "react-native";

interface ChatInputProps {
  onSend: (text: string) => void;
}

export function ChatInput({ onSend }: ChatInputProps) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      onSend(text.trim());
      setText("");
    }
  };

  return (
    <InputContainer>
      <StyledInput
        value={text}
        onChangeText={setText}
        placeholder="메시지를 입력하세요"
        placeholderTextColor="#9B9B9B"
        multiline
        style={{
          maxHeight: 100,
          paddingTop: Platform.OS === "ios" ? 8 : 0,
          paddingBottom: Platform.OS === "ios" ? 8 : 0,
        }}
      />
      <SendButton onPress={handleSend} disabled={!text.trim()}>
        <Ionicons name="send" size={24} color={text.trim() ? "#14C3BC" : "#9B9B9B"} />
      </SendButton>
    </InputContainer>
  );
}

const InputContainer = styled(View)`
  flex-direction: row;
  align-items: flex-end;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.grey_3};
`;

const StyledInput = styled(TextInput)`
  flex: 1;
  min-height: 40px;
  padding: 8px 12px;
  margin-right: 8px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.grey_2};
  color: ${({ theme }) => theme.colors.grey_12};
  ${({ theme }) => theme.fonts.body3_r_14}
`;

const SendButton = styled(TouchableOpacity)`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

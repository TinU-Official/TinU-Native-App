import styled from "@emotion/native";
import { useEffect, useRef } from "react";
import { ScrollView, View } from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";
import { ChatText } from "./ChatBottomSheet";
import { ChatInput } from "./ChatInput";
import { DailyChatGroup } from "./DailyChatGroup";

interface ChatScreenProps {
  messages: ChatText[];
  onSendMessage: (text: string) => void;
}

export function ChatScreen({ messages = [], onSendMessage }: ChatScreenProps) {
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (messages.length > 0) {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }
  }, [messages]);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <Container>
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={{
            flexGrow: 1,
            paddingVertical: 16,
            paddingHorizontal: 16,
          }}
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
          onLayout={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
          showsVerticalScrollIndicator={false}
        >
          <DailyChatGroup chatList={messages} />
        </ScrollView>
        <ChatInput onSend={onSendMessage} />
      </Container>
    </KeyboardAvoidingView>
  );
}

const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.grey_2};
`;

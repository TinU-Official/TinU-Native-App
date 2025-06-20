import styled from "@emotion/native";
import { useEffect, useRef } from "react";
import { ScrollView, View } from "react-native";
import { ChatText } from "./ChatBottomSheet";
import { DailyChatGroup } from "./DailyChatGroup";

interface ChatScreenProps {
  messages: ChatText[];
}

export function ChatScreen({ messages = [] }: ChatScreenProps) {
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (messages.length > 0) {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }
  }, [messages]);

  return (
    <Container>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{
          paddingVertical: 25,
          paddingHorizontal: 16,
        }}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
        onLayout={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
        showsVerticalScrollIndicator={false}
      >
        <DailyChatGroup chatList={messages} />
      </ScrollView>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.grey_2};
`;

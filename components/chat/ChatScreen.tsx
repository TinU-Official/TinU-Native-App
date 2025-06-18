import styled from "@emotion/native";
import { useEffect, useRef } from "react";
import { FlatList, View } from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";
import { ChatMessage } from "../../types/chat";
import { ChatBubble } from "./ChatBubble";
import { ChatInput } from "./ChatInput";

interface ChatScreenProps {
  messages: ChatMessage[];
  onSendMessage: (text: string) => void;
}

export function ChatScreen({ messages = [], onSendMessage }: ChatScreenProps) {
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    if (messages.length > 0) {
      flatListRef.current?.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const renderItem = ({ item }: { item: ChatMessage }) => <ChatBubble message={item} />;

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <Container>
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            flexGrow: 1,
            paddingVertical: 16,
          }}
          onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
          onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })}
          showsVerticalScrollIndicator={false}
          initialNumToRender={20}
          maxToRenderPerBatch={10}
          windowSize={10}
        />
        <ChatInput onSend={onSendMessage} />
      </Container>
    </KeyboardAvoidingView>
  );
}

const Container = styled(View)`
  flex: 1;
  background-color: white;
`;

export const ChatBubbleLine = styled.View`
  flex-direction: row;
  width: 100%;
`;

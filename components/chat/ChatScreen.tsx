import styled from "@emotion/native";
import { memo, useEffect, useRef } from "react";
import { ScrollView, TouchableWithoutFeedback, View } from "react-native";
import { ChatText } from "./ChatBottomSheet";
import { DailyChatGroup } from "./DailyChatGroup";

interface ChatScreenProps {
  chatList: ChatText[];
  closeBottomSheet: VoidFunction;
}

export const ChatScreen = memo(function ChatScreen({ chatList, closeBottomSheet }: ChatScreenProps) {
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollRef.current?.scrollToEnd({ animated: true });
  }, [chatList]);

  return (
    <ChatScreenWrapper
      ref={scrollRef}
      contentContainerStyle={{
        flexGrow: 1,
        gap: 25,
        paddingTop: 35,
        paddingBottom: 85,
        paddingHorizontal: 16,
      }}
      showsVerticalScrollIndicator={false}
    >
      <TouchableWithoutFeedback onPress={closeBottomSheet}>
        <View style={{ flex: 1 }}>
          <DailyChatGroup chatList={chatList} />
        </View>
      </TouchableWithoutFeedback>
    </ChatScreenWrapper>
  );
});

const ChatScreenWrapper = styled(ScrollView)`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey_2};
`;

export const ChatBubbleLine = styled.View`
  flex-direction: row;
  width: 100%;
`;

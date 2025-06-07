import styled from "@emotion/native";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TestText>하하하 testefd</TestText>
    </View>
  );
}

const TestText = styled(Text)`
  ${({ theme }) => theme.fonts.title1_sb_24}
`;

import { FirstBanner } from "@/components/landing/FirstBanner";
import { IndicatorBar } from "@/components/landing/IndicatorBar";
import { SecondBanner } from "@/components/landing/SecondBanner";
import { ThirdBanner } from "@/components/landing/ThirdBanner";
import { useActiveIndicator } from "@/hooks/useActiveIndicator";
import styled from "@emotion/native";
import { ScrollView, useWindowDimensions } from "react-native";

export default function Index() {
  const { height } = useWindowDimensions();
  const { activeIndicator, firstBannerRef, secondBannerRef, thirdBannerRef, measureBanner, updateActiveIndicator } =
    useActiveIndicator();

  const handleScroll = (event: any) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    updateActiveIndicator(scrollY, height);
  };

  return (
    <LandingWrapper>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <FirstBanner
          ref={firstBannerRef}
          onLayout={(event) => {
            const { y, height } = event.nativeEvent.layout;
            measureBanner("first", y, height);
          }}
        />
        <SecondBanner
          ref={secondBannerRef}
          onLayout={(event) => {
            const { y, height } = event.nativeEvent.layout;
            measureBanner("second", y, height);
          }}
        />
        <ThirdBanner
          ref={thirdBannerRef}
          onLayout={(event) => {
            const { y, height } = event.nativeEvent.layout;
            measureBanner("third", y, height);
          }}
        />
      </ScrollView>
      <IndicatorBar activeIndicator={activeIndicator} />
    </LandingWrapper>
  );
}

const LandingWrapper = styled.View`
  flex: 1;
  background-color: white;
`;

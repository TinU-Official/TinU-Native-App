import ImgSecondBanner from "@/assets/imgs/img_second_banner.svg";
import styled from "@emotion/native";
import { forwardRef } from "react";
import { LayoutChangeEvent, View, useWindowDimensions } from "react-native";

interface SecondBannerProps {
  onLayout?: (event: LayoutChangeEvent) => void;
}

const SecondBannerWrapper = styled.View<{ height: number }>(({ height }) => ({
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  height: height,
}));

const SecondBannerContent = styled.View`
  flex-direction: column;
  align-items: center;
  margin-bottom: 75px;
`;

const SecondBannerTitleSection = styled.View`
  flex-direction: column;
  align-items: center;
  margin-bottom: 130px;
`;

const SecondBannerText = styled.Text`
  ${({ theme }) => theme.fonts.title2_sb_22}
  color: ${({ theme }) => theme.colors.grey_12};
`;

export const SecondBanner = forwardRef<View, SecondBannerProps>(({ onLayout }, ref) => {
  const { height } = useWindowDimensions();

  return (
    <SecondBannerWrapper ref={ref} height={height} onLayout={onLayout}>
      <SecondBannerContent>
        <SecondBannerTitleSection>
          <SecondBannerText>인증받은 학생과의 거래로</SecondBannerText>
          <SecondBannerText>안심하고 거래할 수 있어요</SecondBannerText>
        </SecondBannerTitleSection>
        <ImgSecondBanner />
      </SecondBannerContent>
    </SecondBannerWrapper>
  );
});

SecondBanner.displayName = "SecondBanner";

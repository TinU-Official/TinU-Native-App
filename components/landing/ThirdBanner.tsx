import IcTextLogoSmall from "@/assets/icons/ic_text_logo_small.svg";
import ImgThirdBanner from "@/assets/imgs/img_third_banner.svg";
import styled from "@emotion/native";
import { forwardRef } from "react";
import { LayoutChangeEvent, View, useWindowDimensions } from "react-native";

interface ThirdBannerProps {
  onLayout?: (event: LayoutChangeEvent) => void;
}

const ThirdBannerWrapper = styled.View<{ height: number }>(({ height }) => ({
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: height,
}));

const ThirdBannerContent = styled.View`
  flex-direction: column;
  align-items: center;
  margin-bottom: 75px;
`;

const ThirdBannerTitleSection = styled.View`
  flex-direction: column;
  align-items: center;
  margin-bottom: 110px;
`;

const ThirdBannerTextWithLogoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ThirdBannerText = styled.Text`
  ${({ theme }) => theme.fonts.title2_sb_22}
  color: ${({ theme }) => theme.colors.grey_12};
  margin-left: 3px;
`;

const ThirdBannerTextOnly = styled.Text`
  ${({ theme }) => theme.fonts.title2_sb_22}
  color: ${({ theme }) => theme.colors.grey_12};
`;

export const ThirdBanner = forwardRef<View, ThirdBannerProps>(({ onLayout }, ref) => {
  const { height } = useWindowDimensions();

  return (
    <ThirdBannerWrapper ref={ref} height={height} onLayout={onLayout}>
      <ThirdBannerContent>
        <ThirdBannerTitleSection>
          <ThirdBannerTextWithLogoWrapper>
            <IcTextLogoSmall />
            <ThirdBannerText>와 함께하는 안전한 거래</ThirdBannerText>
          </ThirdBannerTextWithLogoWrapper>
          <ThirdBannerTextOnly>시작해 볼까요?</ThirdBannerTextOnly>
        </ThirdBannerTitleSection>
        <ImgThirdBanner />
      </ThirdBannerContent>
    </ThirdBannerWrapper>
  );
});

ThirdBanner.displayName = "ThirdBanner";

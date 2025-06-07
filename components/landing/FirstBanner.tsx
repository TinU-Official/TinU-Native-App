import IcTextLogo from "@/assets/icons/ic_text_logo.svg";
import ImgFirstBanner from "@/assets/imgs/img_first_banner.svg";
import styled from "@emotion/native";
import { forwardRef } from "react";
import { LayoutChangeEvent, View, useWindowDimensions } from "react-native";

interface FirstBannerProps {
  onLayout?: (event: LayoutChangeEvent) => void;
}

const FirstBannerWrapper = styled.View<{ height: number }>((props) => ({
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  height: props.height,
}));

const FirstBannerContent = styled.View`
  flex-direction: column;
  align-items: center;
  margin-bottom: 75px;
`;

const FirstBannerTitleSection = styled.View`
  flex-direction: column;
  align-items: center;
  margin-bottom: 96px;
`;

const FirstBannerTitle = styled.Text`
  ${({ theme }) => theme.fonts.title2_sb_22}
  margin-bottom: 23px;
  color: ${({ theme }) => theme.colors.grey_12};
`;

export const FirstBanner = forwardRef<View, FirstBannerProps>(({ onLayout }, ref) => {
  const { height } = useWindowDimensions();

  return (
    <FirstBannerWrapper ref={ref} height={height} onLayout={onLayout}>
      <FirstBannerContent>
        <FirstBannerTitleSection>
          <FirstBannerTitle>당신의 생활을 보다 스마트하게</FirstBannerTitle>
          <IcTextLogo />
        </FirstBannerTitleSection>
        <ImgFirstBanner />
      </FirstBannerContent>
    </FirstBannerWrapper>
  );
});

FirstBanner.displayName = "FirstBanner";

import { useRef, useState } from "react";
import { View } from "react-native";

export const useActiveIndicator = () => {
  const [activeIndicator, setActiveIndicator] = useState(1);

  const bannerRefs = {
    first: useRef<View>(null),
    second: useRef<View>(null),
    third: useRef<View>(null),
  };

  const bannerPositions = useRef({
    first: { y: 0, height: 0 },
    second: { y: 0, height: 0 },
    third: { y: 0, height: 0 },
  });

  const measureBanner = (ref: string, y: number, height: number) => {
    bannerPositions.current[ref as keyof typeof bannerPositions.current] = { y, height };
  };

  const updateActiveIndicator = (scrollY: number, viewportHeight: number) => {
    const positions = bannerPositions.current;
    const center = scrollY + viewportHeight / 2;

    if (center >= positions.first.y && center < positions.first.y + positions.first.height) {
      setActiveIndicator(1);
    } else if (center >= positions.second.y && center < positions.second.y + positions.second.height) {
      setActiveIndicator(2);
    } else if (center >= positions.third.y && center < positions.third.y + positions.third.height) {
      setActiveIndicator(3);
    }
  };

  return {
    activeIndicator,
    firstBannerRef: bannerRefs.first,
    secondBannerRef: bannerRefs.second,
    thirdBannerRef: bannerRefs.third,
    measureBanner,
    updateActiveIndicator,
  };
};

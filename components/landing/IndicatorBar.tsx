import styled from "@emotion/native";
import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

const IndicatorBarWrapper = styled.View`
  position: absolute;
  top: 50%;
  right: 15px;
  flex-direction: column;
  gap: 6px;
  z-index: 10;
  margin-top: -34.5px;
`;

const IndicatorWrapper = styled(Animated.View)<{ isActive: boolean }>`
  width: 7px;
  border-radius: 9px;
  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.mint_600 : theme.colors.grey_4)};
`;

interface IndicatorBarProps {
  activeIndicator: number;
}

const indicators = [1, 2, 3];

export const IndicatorBar: React.FC<IndicatorBarProps> = ({ activeIndicator }) => {
  const animatedHeights = useRef(indicators.map(() => new Animated.Value(12))).current;

  useEffect(() => {
    indicators.forEach((index, i) => {
      Animated.timing(animatedHeights[i], {
        toValue: activeIndicator === index ? 30 : 12,
        duration: 300,
        useNativeDriver: false,
      }).start();
    });
  }, [activeIndicator, animatedHeights]);

  return (
    <IndicatorBarWrapper>
      {indicators.map((index, i) => (
        <IndicatorWrapper
          key={index}
          isActive={activeIndicator === index}
          style={{
            height: animatedHeights[i],
          }}
        />
      ))}
    </IndicatorBarWrapper>
  );
};

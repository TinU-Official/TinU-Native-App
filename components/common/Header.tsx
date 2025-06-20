import styled from "@emotion/native";
import React from "react";

interface HeaderProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  isSticky?: boolean;
}

export function Header({ left, center, right, isSticky = false }: HeaderProps) {
  return (
    <HeaderWrapper isSticky={isSticky}>
      <LeftElement>{left}</LeftElement>
      <CenterElement>{center}</CenterElement>
      <RightElement>{right}</RightElement>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.View<{ isSticky: boolean }>`
  z-index: 10;
  top: 0;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.white};
  position: ${({ isSticky }) => (isSticky ? "absolute" : "relative")};
`;

const LeftElement = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  left: 20px;
  height: 100%;
`;

const CenterElement = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 80px;
`;

const RightElement = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 20px;
  height: 100%;
`;

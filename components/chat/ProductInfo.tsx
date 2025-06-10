import styled from "@emotion/native";
import { memo } from "react";
import { Image } from "react-native";

export const ProductInfo = memo(function ProductInfo() {
  return (
    <ProductInfoWrapper>
      <ProductImage source={require("@/assets/imgs/img_mock.png")} />
      <ProductDetailContainer>
        <ProductTitleAndStatus>
          <ProductTitle>라탄 자전거 바구니</ProductTitle>
          <ProductStatus>
            <ProductStatusText>거래중</ProductStatusText>
          </ProductStatus>
        </ProductTitleAndStatus>
        <ProductPrice>6,000원</ProductPrice>
      </ProductDetailContainer>
    </ProductInfoWrapper>
  );
});

const ProductInfoWrapper = styled.View`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  z-index: 5;

  flex-direction: row;
  align-items: center;
  gap: 17px;

  width: 100%;
  height: 70px;
  padding-left: 20px;

  background-color: ${({ theme }) => theme.colors.white};
`;

const ProductImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 4px;
`;

const ProductDetailContainer = styled.View`
  flex-direction: column;
  gap: 5px;
`;

const ProductTitleAndStatus = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

const ProductTitle = styled.Text`
  ${({ theme }) => theme.fonts.subtitle2_m_16}
  color: ${({ theme }) => theme.colors.grey_12};
`;

const ProductStatus = styled.View`
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 20px;

  border-radius: 13px;
  background-color: ${({ theme }) => theme.colors.mint_500};
`;

const ProductStatusText = styled.Text`
  ${({ theme }) => theme.fonts.caption1_m_11}
  color: ${({ theme }) => theme.colors.white};
`;

const ProductPrice = styled.Text`
  ${({ theme }) => theme.fonts.subtitle2_m_16}
  color: ${({ theme }) => theme.colors.grey_6};
`;

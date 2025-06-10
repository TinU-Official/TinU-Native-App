import IcChevronLeft from "@/assets/icons/ic_chevron_left.svg";
import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";

interface BackButtonProps {
  link?: string;
}

export function BackButton({ link }: BackButtonProps) {
  const router = useRouter();

  const handleClickBackButton = () => {
    if (link) {
      router.push(link as any);
    } else {
      router.back();
    }
  };

  return (
    <TouchableOpacity onPress={handleClickBackButton}>
      <IcChevronLeft width={24} height={24} />
    </TouchableOpacity>
  );
}

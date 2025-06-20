import IcMoreVertical from "@/assets/icons/ic_more_vertical.svg";
import { TouchableOpacity } from "react-native";

const handleClickMoreButton = () => {};

export function MoreButton() {
  return (
    <TouchableOpacity onPress={handleClickMoreButton}>
      <IcMoreVertical width={24} height={24} />
    </TouchableOpacity>
  );
}

import { theme } from "@/style/theme";
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: typeof theme.colors;
    fonts: typeof theme.fonts;
  }
}

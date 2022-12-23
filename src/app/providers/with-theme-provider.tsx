import { ConfigProvider } from "antd";

const token = {
  colorTextHeading: "#af45b1",
  colorLink: "#af45b1",
  colorTextDescription: "#333",
  colorPrimaryText: "#b7b7b7",
  colorInfo: "#adadad",
  fontSize: 18,
  borderRadius: 6,
};

export const withThemeProvider = (component: () => React.ReactNode) => () =>
  <ConfigProvider theme={{ token }}>{component()}</ConfigProvider>;

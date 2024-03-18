import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
interface reduxProps {
  children: ReactNode;
}
const ReduxProvider: FC<reduxProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;

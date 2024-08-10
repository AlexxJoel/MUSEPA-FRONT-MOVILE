import Navigation from "./src/modules/skill/views/navigation/Navigation";

import { LogBox } from 'react-native';
LogBox.ignoreAllLogs(true)

export default function App() {
  return (
    <Navigation />
  );
}
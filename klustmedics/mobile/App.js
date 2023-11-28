import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FullApp from "./screens/FullApp";
import { Provider } from "react-redux";
import store from "./redux/store";
import FlashMessage from "react-native-flash-message";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <FlashMessage position="top" />
        <StatusBar style="light" />
        <FullApp />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
});

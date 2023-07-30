import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";
import "./index.scss";
import { Button } from "@react-native-material/core";

export default class Index extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>Hello world!111</Text>
        <Button title="Click Me" onPress={() => alert("🎉🎉🎉")} />
      </View>
    );
  }
}

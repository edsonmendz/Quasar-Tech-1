import React, { useState } from "react";
import { View, Text } from "react-native";
import { Checkbox } from "react-native-paper";

const MyCheckbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => setChecked(!checked)}
      />
      <Text>Aceito os termos</Text>
    </View>
  );
};

export default MyCheckbox;

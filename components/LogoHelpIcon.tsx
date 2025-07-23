import React from "react";
import { View, Image, StyleSheet } from "react-native";

const LogoWithHelpIcon = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require("../assets/images/squareme_dark_logo.png")}
      />
      <Image
        style={styles.helpIcon}
        resizeMode="contain"
        source={require("../assets/images/help_circle_icon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20
  },
  logo: {
    width: 150,
    height: 100,
  },
  helpIcon: {
    width: 20,
    height: 20,
  },
});

export default LogoWithHelpIcon;

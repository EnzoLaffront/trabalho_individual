import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import Logo from "../../../../../assets/logo.png";
import Play from "../../../../../assets/play.png";
import Rate from "../../../../../assets/button_rate_normal.png";
import Score from "../../../../../assets/button_score_normal.png";
import Bird from "../../../../../assets/bird.png";

const Start = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />

      <View>
        <Image source={Bird} style={styles.bird} />
      </View>

      <TouchableWithoutFeedback>
        <Image source={Rate} style={styles.rate} resizeMode= "cover" />
      </TouchableWithoutFeedback>

    <View style={styles.butao}>

    <TouchableWithoutFeedback>
        <Image source={Play} style={styles.play} resizeMode="cover" />
      </TouchableWithoutFeedback>
      
      <TouchableWithoutFeedback>
        <Image source={Score} style={styles.score} resizeMode="cover" />
      </TouchableWithoutFeedback>

      
      </View>
    </View>
  );
};

export { Start };

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 240,
    height: 60,
  },

  play: {
    width: 120,
    height: 74,
    
  },
  rate: {
    marginTop: 32,
    width: 80,
    height: 45,
    justifyContent: "space-evenly",
  },
  score: {
   
    width: 120,
    height: 74,
   
  },

  bird: {
    width: 80,
    height: 60,
    marginTop: 20,
  },

  butao:{
    flexDirection: "row",
    marginTop: 60,
    gap: 20
  }
});

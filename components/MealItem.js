import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import DefaultText from '../components/DefaultText';

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelect}>
        <View>
          <View style={{ ...styles.mealCard, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.imageUrl }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealCard, ...styles.mealDetail }}>
            <DefaultText>{props.duration}m</DefaultText>
            <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealCard: {
    flexDirection: 'row',
  },
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    marginVertical: 10,
    // borderRadius: 10,
    // overflow: "hidden",
  },
  mealHeader: {
    height: '85%',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: 'roboto-black',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default MealItem;

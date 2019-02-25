import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Animated
} from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import Background2 from "../assets/images/background2.jpg";
import RachelWaving from "../assets/images/Rachel_Waving.png";
import FarhanCoding from "../assets/images/Farhan_Coding.png";
import WeiJieComputer from "../assets/images/WeiJie_Computer.png";
import PriyaSolving from "../assets/images/Priya_Solving.png";

class Year extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    fadeAnim: new Animated.Value(0) // Initial value for opacity: 0
  };

  render() {
    const { navigation } = this.props;
    return (
      <View
        style={{
          flex: 1,
          background: "black"
        }}
      >
        <ParallaxScrollView
          parallaxHeaderHeight={300}
          renderBackground={() => (
            <ImageBackground
              source={Background2}
              style={{
                height: 300,
                width: "100%",
                alignItems: "center",
                justifyContent: "center"
              }}
              imageStyle={{
                opacity: 0.5
              }}
            >
              <Text
                style={{
                  fontFamily: "Avenir Next",
                  fontWeight: "600",
                  fontSize: 30,
                  color: "white"
                }}
              >
                Year
              </Text>
            </ImageBackground>
          )}
        >
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Explore");
              }}
              style={{
                alignItems: "center",
                margin: 16,

              }}
            >
              <ImageBackground
                style={{
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                  height: 200,
                  width: "100%",
                  backgroundColor: "white",
                  shadowColor: "gray",
                  shadowBlur: 10,
                  shadowOffset: {
                    width: 2,
                    height: 2
                  },
                  shadowOpacity: 1,
                  borderRadius: 5
                }}
                source={RachelWaving}
                resizeMode="contain"
              >
                <Text
                  style={{
                    margin: 8,
                    fontFamily: "Avenir Next",
                    fontSize: 20,
                    fontWeight: "500",
                    position: "absolute",
                    bottom: 40,
                    left: 8
                  }}
                >
                  Rachel
                </Text>
                <Text
                  style={{
                    margin: 8,
                    fontFamily: "Avenir Next",
                    fontSize: 20,
                    fontWeight: "500",
                    position: "absolute",
                    bottom: 8,
                    left: 8
                  }}
                >
                  Year 1
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("FarhanIntro");
            }}
            style={{
              alignItems: "center",
              margin: 16
            }}
          >
            <ImageBackground
              style={{
                height: 200,
                width: "100%",
                backgroundColor: "white",
                shadowColor: "gray",
                shadowBlur: 10,
                shadowOffset: {
                  width: 2,
                  height: 2
                },
                shadowOpacity: 1,
                borderRadius: 5
              }}
              source={FarhanCoding}
              resizeMode="contain"
            >
              <Text
                style={{
                  margin: 8,
                  fontFamily: "Avenir Next",
                  fontSize: 20,
                  fontWeight: "500",
                  position: "absolute",
                  bottom: 40,
                  left: 8
                }}
              >
                Farhan
              </Text>
              <Text
                style={{
                  margin: 8,
                  fontFamily: "Avenir Next",
                  fontSize: 20,
                  fontWeight: "500",
                  position: "absolute",
                  bottom: 8,
                  left: 8
                }}
              >
                Year 2
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
              margin: 16
            }}
            onPress={() => {
              navigation.navigate("PriyaIntro");
            }}
          >
            <ImageBackground
              style={{
                height: 200,
                width: "100%",
                backgroundColor: "white",
                shadowColor: "gray",
                shadowBlur: 10,
                shadowOffset: {
                  width: 2,
                  height: 2
                },
                shadowOpacity: 1,
                borderRadius: 5
              }}
              source={PriyaSolving}
              resizeMode="contain"
            >
              <Text
                style={{
                  margin: 8,
                  fontFamily: "Avenir Next",
                  fontSize: 20,
                  fontWeight: "500",
                  position: "absolute",
                  bottom: 40,
                  left: 8
                }}
              >
                Priya
              </Text>
              <Text
                style={{
                  margin: 8,
                  fontFamily: "Avenir Next",
                  fontSize: 20,
                  fontWeight: "500",
                  position: "absolute",
                  bottom: 8,
                  left: 8
                }}
              >
                Year 3
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          <SafeAreaView>
            <TouchableOpacity
              style={{
                alignItems: "center",
                margin: 16
              }}
              onPress={() => {
                navigation.navigate("WeiJieIntro");
              }}
            >
              <ImageBackground
                style={{
                  height: 200,
                  width: "100%",
                  backgroundColor: "white",
                  shadowColor: "gray",
                  shadowBlur: 10,
                  shadowOffset: {
                    width: 2,
                    height: 2
                  },
                  shadowOpacity: 1,
                  borderRadius: 5
                }}
                source={WeiJieComputer}
                resizeMode="contain"
              >
                <Text
                  style={{
                    margin: 8,
                    fontFamily: "Avenir Next",
                    fontSize: 20,
                    fontWeight: "500",
                    position: "absolute",
                    bottom: 40,
                    left: 8
                  }}
                >
                  Wei Jie
                </Text>
                <Text
                  style={{
                    margin: 8,
                    fontFamily: "Avenir Next",
                    fontSize: 20,
                    fontWeight: "500",
                    position: "absolute",
                    bottom: 8,
                    left: 8
                  }}
                >
                  Year 4
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </SafeAreaView>
        </ParallaxScrollView>
      </View>
    );
  }
}

export default Year;

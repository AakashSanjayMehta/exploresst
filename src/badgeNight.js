import React, { Component } from 'react'
import { Text, View, ImageBackground, TouchableOpacity, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { FILE_URL } from './constants'

class badgeNight extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'black'
      }}>
        <ImageBackground source={{ uri: FILE_URL + '/images/background.png' }}
          style={{
            flex: 1, resizeMode: 'contain'
          }} imageStyle={{ opacity: 0.5 }}>

          <SafeAreaView style={{
            flex: 1,
            margin: 16
          }}>
           


              <View>
                <Image />
                <Text style={{
                  fontFamily: 'Avenir Next',
                  textAlign: 'center',
                  fontSize: 30,
                  fontWeight: '600',
                  color: 'white'
                }}>Rachel</Text>
              </View>
              <ScrollView>


              <View style={{
                width: '75%',
                backgroundColor: 'darkgrey',
                shadowColor: 'gray',

                shadowOffset: {
                  width: 2,
                  height: 2
                },
                shadowOpacity: 1,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "flex-end",

                marginTop: 16

              }}><Text style={{
                padding: 8,
                fontSize: 18,
                fontFamily: 'Avenir Next',
                color: "white"

              }}>How did you get to know SST?
              </Text></View>
              <View style={
                styles.ChatViewStyle
              }><Text style={
                styles.ChatTextStyle
              }>Badge Night is an annual event, and SST tradition, which
                  marks the official induction of the new Secondary 1
                  students into the SST Family.
            </Text></View>
              <View style={
                styles.ChatViewStyle
              }><Text style={
                styles.ChatTextStyle
              }>It is held after the end of
                  their Secondary 1 Orientation, typically on a Friday at the
                  start of the term.
            </Text></View>
              <View style={
                styles.ChatViewStyle
              }><Text style={
                styles.ChatTextStyle
              }> Badge Night aims to inculcate a sense of belonging into the
                  new Secondary 1 students and officially welcome them,
                  while also allowing the Secondary 1 students to forge
                  closer ties with their peers.
            </Text></View>
              <View style={
                styles.ChatViewStyle
              }><Text style={
                styles.ChatTextStyle
              }>The Secondary 1 students will
                  also complete a session on school ethos and values
                  (by SConnect).
            </Text></View>
            </ScrollView>
          </SafeAreaView>


          <SafeAreaView style={{
            marginLeft: 8,
            position: 'absolute',
          }}>
            <TouchableOpacity onPress={() => {
              this.props.navigation.goBack()
            }}>
              <Icon name={'keyboard-arrow-left'} color={'white'} size={40} />
            </TouchableOpacity>

          </SafeAreaView>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ChatTextStyle: {
    padding: 8,
    fontSize: 18,
    fontFamily: 'Avenir Next',
  },
  ChatViewStyle: {
    width: '75%',
    backgroundColor: 'white',
    shadowColor: 'gray',

    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",

    marginTop: 16

  }

})


export default badgeNight

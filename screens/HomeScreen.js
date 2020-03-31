import React, { useEffect, useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
//color
import Colors from "../constants/Colors";
//carousel
import { SliderBox } from "react-native-image-slider-box";
import Slideshow from "react-native-image-slider-show";
import Carousel from "react-native-anchor-carousel";
import loadingBlurImage from "./../assets/images/loading-blur.png";
// import Carousel from "react-native-snap-carousel";
// icon
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TabBarIcon from "../components/TabBarIcon";
import IconMenu from "../components/IconMenu";

import { MonoText } from "../components/StyledText";

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  const [state, setState] = useState({
    position: 0,
    interval: null
  });

  const images = [
    "https://images.unsplash.com/photo-1535535112387-56ffe8db21ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80",
    "https://images.unsplash.com/photo-1582417054046-d3d3a44fff35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1524234599372-a5bd0194758d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1578575436955-ef29da568c6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
  ];

  // image-slider-show
  const dataSource = [
    {
      // title: "Discount Tiket Kereta",
      // caption: "Beli 1 Dapat 2",
      url:
        "https://images.unsplash.com/photo-1535535112387-56ffe8db21ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80"
    },
    {
      // title: "Rental",
      // caption: "Menyediakan Mobil-mobil Kelas Atas",
      url:
        "https://images.unsplash.com/photo-1582417054046-d3d3a44fff35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
    },
    {
      // title: "Tiket Hotel",
      // caption: "Tiket Hotel Dengan Harga Paling Murah",
      url:
        "https://images.unsplash.com/photo-1524234599372-a5bd0194758d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    },
    {
      // title: "Tiket Event",
      // caption: "Tiket Event Beli 1 Dapat 3",
      url:
        "https://images.unsplash.com/photo-1578575436955-ef29da568c6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    }
  ];

  const data = [
    {
      uri: "https://i.imgur.com/GImvG4q.jpg",
      title: "Lorem ipsum dolor sit amet",
      content:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
      uri: "https://i.imgur.com/Pz2WYAc.jpg",
      title: "Lorem ipsum ",
      content: "Neque porro quisquam est qui dolorem ipsum "
    },
    {
      uri: "https://i.imgur.com/IGRuEAa.jpg",
      title: "Lorem ipsum dolor",
      content:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
      uri: "https://i.imgur.com/fRGHItn.jpg",
      title: "Lorem ipsum dolor",
      content: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
    },
    {
      uri: "https://i.imgur.com/WmenvXr.jpg",
      title: "Lorem ipsum ",
      content: "Neque porro quisquam est qui dolorem ipsum quia dolor "
    }
  ];

  const renderItem = ({ item, index }) => {
    const { uri, title, content } = item;
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.item}
        // onPress={() => {
        //   numberCarousel.scrollToIndex(index);
        // }}
      >
        <ImageBackground
          source={{ uri: uri }}
          style={styles.imageBackground}
          loadingIndicatorSource={loadingBlurImage}
        >
          <View style={styles.rightTextContainer}>
            <Text style={styles.rightText}>Lorem</Text>
          </View>
        </ImageBackground>
        <View style={styles.lowerContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.contentText}>{content}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // console.log(__DEV__);
  // console.log(height);

  // image-slider-show
  //component didmount
  useEffect(() => {
    const timer = window.setInterval(() => {
      //setInterval
      setState({
        position: state.position === dataSource.length ? 0 : state.position + 1
      });
    }, 3000);
    return () => {
      // Return callback to run on unmount.
      window.clearInterval(timer);
    };
  });

  console.log(state.position);
  // console.log(dataSource);
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View>
          <View style={styles.carouselCard}>
            {/* <SliderBox
              images={images}
              sliderBoxHeight={215}
              dotColor="#86E3CE"
              autoplay={true}
              circleLoop={true}
            /> */}
            {/* <Text>ini carausel</Text> */}
            <Slideshow
              dataSource={dataSource}
              position={state.position}
              onPositionChanged={position => setState({ position })}
              indicatorSelectedColor="#86E3CE"
              height={228}
            />
          </View>
          <ImageBackground
            style={{
              flex: 1,
              resizeMode: "cover",
              zIndex: 2,
              marginTop: "-20%",
              height: 50
            }}
            source={require("../assets/images/backgroundmobile.png")}
          />
          <View
            style={{
              zIndex: 2,
              paddingRight: 10,
              paddingLeft: 10,
              marginTop: "-4%",
              backgroundColor: "#ececec"
            }}
          >
            <Text style={styles.textTitleVir}>Hey Kamu.. Ya.. Kamu</Text>
            <Text style={styles.textTitleVir}>Mau Kemana Hari Ini ?.</Text>
          </View>
          <View style={styles.containerMenuBox}>
            <View style={{ marginBottom: 20 }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginVertical: 10
                }}
              >
                <View style={styles.boxIcon}>
                  {/* color="#ccc" */}
                  <Text>
                    <IconMenu nama="plane-departure" color="#D0E6A5" />
                  </Text>
                  <Text style={styles.textIcon}>Pesawat</Text>
                </View>
                <View style={styles.boxIcon}>
                  <Text>
                    <IconMenu nama="hotel" color="#86E3CE" />
                  </Text>
                  <Text style={styles.textIcon}>Hotel</Text>
                </View>
                <View style={styles.boxIcon}>
                  <Text>
                    <IconMenu nama="rocket" color="#FFDD94" />
                  </Text>
                  <Text style={styles.textIcon}>To Do</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginVertical: 10
                }}
              >
                <View style={styles.boxIcon}>
                  <Text>
                    <IconMenu nama="car" color="#AAC9CE" />
                  </Text>
                  <Text style={styles.textIcon}>Rental Mobil</Text>
                </View>

                <View style={styles.boxIcon}>
                  <Text>
                    <IconMenu nama="subway" color="#B6B4C2" />
                  </Text>
                  <Text style={styles.textIcon}>Tiket Kereta</Text>
                </View>
                <View style={styles.boxIcon}>
                  <Text>
                    <IconMenu nama="ticket-alt" color="#F3DBCF" />
                  </Text>
                  <Text style={styles.textIcon}>Event</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingRight: 10,
              paddingBottom: 10,
              paddingLeft: 10,
              backgroundColor: "#ececec"
            }}
          >
            <Text style={styles.textTitleVir}>
              Info Terkait Pandemi Virus Korona
            </Text>
            <Text style={styles.textTitle1}>
              Jaga kesehatan, ini pasti berlalu. Cek info terkait reschedule dan
              refound disini.
            </Text>
          </View>
          <View style={styles.contentMenu}>
            <View style={styles.containerCarausel}>
              <TouchableOpacity activeOpacity={0.8}>
                <Carousel
                  style={styles.carousel}
                  data={data}
                  renderItem={renderItem}
                  itemWidth={0.7 * width}
                  inActiveOpacity={0.3}
                  containerWidth={width}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/development-mode/"
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change"
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  textTitle1: {
    color: "#9B9B9B",
    fontSize: 16
  },
  textTitleVir: {
    color: "#455054",
    fontSize: 18,
    fontWeight: "bold"
  },
  carouselCard: {
    flex: 1,
    flexDirection: "column",
    height: 260
  },
  // anchor-carousel
  carousel: {
    height: 340,
    paddingVertical: 10
  },
  containerCarausel: {
    paddingTop: 10,
    backgroundColor: "#ececec",
    zIndex: 2
  },
  item: {
    borderWidth: 2,
    backgroundColor: "white",
    flex: 1,
    borderRadius: 10,
    borderColor: "white"
  },
  imageBackground: {
    flex: 2,
    backgroundColor: "#EBEBEB",
    borderWidth: 5,
    borderColor: "white"
  },
  rightTextContainer: {
    marginLeft: "auto",
    marginRight: -2,
    backgroundColor: "rgba(49, 49, 51,0.5)",
    padding: 3,
    marginTop: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  rightText: { color: "white" },
  lowerContainer: {
    flex: 1,
    margin: 10
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 18
  },
  contentText: {
    marginTop: 10,
    fontSize: 12
  },
  // end carousel

  //shadow
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  // end shadow

  containerMenuBox: {
    backgroundColor: "#ececec",
    zIndex: 2
  },
  contentMenu: {
    marginTop: -10,
    minHeight: height - 310,
    backgroundColor: "#ececec"
  },
  boxIcon: {
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    })
  },
  textIcon: {
    color: Colors.tabIconDefault,
    fontWeight: "bold",
    fontSize: 14
  }

  // containerMenu: {
  //   backgroundColor: "orange",
  //   flex: 1,
  //   flexDirection: "row",
  //   justifyContent: "space-around"
  // }
});

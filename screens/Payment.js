import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Button
} from "react-native";
import {
  TouchableOpacity,
  TouchableHighlight
} from "react-native-gesture-handler";
import IconMenu from "../components/IconMenu";

const { width, height } = Dimensions.get("window");

const Payment = ({ params }) => (
  <View style={{ flex: 1 }}>
    {/* card myticket */}

    {/* info */}
    <View style={styles.myInfo}>
      <View>
        <View style={styles.cardContentInfo}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <IconMenu nama="exclamation-triangle" color="#FFDD94" />
          </View>
          <View style={{ flex: 2 }}>
            <Text style={styles.textDate}>
              Silakan melakukan pembayaran memalui M-Banking, E-Banking dan ATM
              Ke No.rek Yang Tertera
            </Text>
            <Text style={styles.textKereta}>No.rek : 09812312312 </Text>
          </View>
        </View>
      </View>
    </View>
    {/* end info */}
    {/* ticket */}
    <View style={styles.myTicket}>
      <View>
        <View style={styles.bgLogo}>
          <TouchableHighlight onPress={console.log("ok")} activeOpacity={0.3}>
            <Image
              on
              source={require("../assets/images/LandTickBlack.png")}
              style={{ height: 30, width: 90 }}
            />
          </TouchableHighlight>
        </View>
        <View style={{ position: "absolute", top: 2, right: 10 }}>
          <Text style={styles.textKereta}>Kereta Api</Text>
          <Text style={styles.textDate}>Mon, 13 02 2020</Text>
        </View>
        <View style={styles.imgBarcode}>
          {/* <Text style={styles.textDate}>Rejected</Text> */}
          <Image
            source={require("../assets/images/barcode.png")}
            style={{ width: 140, height: 160 }}
          />
        </View>
        <View style={styles.cardContent}>
          <View style={styles.cardContentMyTicket}>
            <View style={styles.cardContentMyTicketLeft}>
              <Text style={styles.textKereta}>Argo Wills</Text>
              <Text style={styles.textDate}>Executive</Text>
            </View>
          </View>

          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.cardContentMyTicketRigth}>
                <View style={styles.itemBox}>
                  <Text style={styles.textKereta}>05:00</Text>
                  <Text style={styles.textDate}>16 02 2020</Text>
                </View>
                <View style={styles.itemBox}>
                  <Text style={styles.textKereta}>05:00</Text>
                  <Text style={styles.textDate}>16 02 2020</Text>
                </View>
              </View>

              <View style={styles.cardContentMyTicketRigth}>
                <View style={styles.itemBoxRight}>
                  <Text style={styles.textKereta}>Jakarta (GMR)</Text>
                  <Text style={styles.textDate}>St. Gambir</Text>
                </View>
                <View style={styles.itemBoxRight}>
                  <Text style={styles.textKereta}>Surabaya</Text>
                  <Text style={styles.textDate}>St. Surabaya</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
    {/* end ticket */}
    {/* Rincian */}
    <View style={styles.myRincian}>
      <Text style={styles.textRincian}>Rincian Harga</Text>
      <View style={styles.contentRinican}>
        <View>
          <View style={styles.cardContentRincian}>
            <View style={{ flex: 2 }}>
              <Text style={styles.textMount}>Argo Wills @2 </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.textMount}>Rp. 150.000</Text>
              {/* <Text style={styles.textKereta}>No.rek : 09812312312 </Text> */}
            </View>
          </View>
          <View style={styles.cardContentRincianTotal}>
            <View style={{ flex: 2 }}>
              <Text style={styles.textKereta}>Total</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.textKereta}>Rp. 300.000</Text>
              {/* <Text style={styles.textKereta}>No.rek : 09812312312 </Text> */}
            </View>
          </View>
        </View>
      </View>
    </View>
    {/* end Rincian */}
    {/*end card myticket */}
  </View>
);

const styles = StyleSheet.create({
  bgLogo: {
    paddingLeft: 5,
    backgroundColor: "#D0E6A5",
    width: "30%",
    borderBottomRightRadius: 20,
    elevation: 4
  },
  myInfo: {
    width: "100%",
    backgroundColor: "white",
    paddingBottom: 20,
    marginBottom: 2
  },
  myRincian: {
    width: "100%",
    backgroundColor: "white",
    paddingBottom: 20,
    marginTop: 2
  },
  myTicket: {
    width: "100%",
    // height: 160,
    backgroundColor: "white",
    // paddingLeft: 10,
    // paddingRight: 10,
    paddingBottom: 10
  },
  itemBox: {
    height: 30,
    paddingLeft: 6,
    paddingRight: 6,
    justifyContent: "center",
    marginTop: 5
  },
  itemBoxRight: {
    height: 30,
    paddingLeft: 6,
    paddingRight: 6,
    justifyContent: "center",
    marginTop: 5,
    width: 110
  },
  textKereta: {
    color: "#455054",
    fontSize: 14,
    fontWeight: "bold"
  },
  textDate: {
    color: "#9B9B9B",
    fontSize: 12,
    marginTop: -3
  },
  textMount: {
    color: "#9B9B9B",
    fontSize: 14
  },
  cardContentInfo: {
    marginTop: 10,
    flexDirection: "row",

    // backgroundColor: "orange",
    paddingLeft: 8
  },
  contentRinican: {
    // backgroundColor: "orange",
    marginTop: 8,
    marginStart: 10,
    marginEnd: 10,
    borderColor: "#9B9B9B",
    borderWidth: 2,
    borderRadius: 4,
    elevation: 2,
    paddingVertical: 10
  },
  cardContentRincian: {
    flexDirection: "row",
    // backgroundColor: "orange",
    paddingLeft: 8
  },
  cardContentRincianTotal: {
    borderTopColor: "#9B9B9B",
    borderColor: "white",
    borderWidth: 1,
    marginTop: 8,
    paddingTop: 4,
    flexDirection: "row",
    // backgroundColor: "orange",
    paddingLeft: 8
  },
  cardContent: {
    marginTop: 10,
    flexDirection: "row"
    // backgroundColor: "grey"
  },

  cardContentMyTicket: {
    width: width / 3,
    flexDirection: "column",
    alignItems: "center"
    // backgroundColor: "orange"
  },
  cardContentMyTicketLeft: {
    height: 30,
    paddingLeft: 4,
    paddingRight: 4,
    justifyContent: "center",
    marginTop: 5
  },
  cardContentMyTicketRigth: {
    width: width / 3,
    flexDirection: "column",
    alignItems: "center"
    // backgroundColor: "purple"
  },
  imgBarcode: {
    // borderRadius: 10,
    // height: 50,
    // paddingLeft: 2,
    // paddingRight: 2,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center"
  },

  cardContentStasiun: {
    width: 200,
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  textRincian: {
    paddingTop: 10,
    paddingLeft: 10,
    color: "#455054",
    fontSize: 18,
    fontWeight: "bold"
  }
});

// <View style={styles.imgBarcode}>
// {/* <Text style={styles.textDate}>Rejected</Text> */}
// <Image
//   source={require("../assets/images/barcode.png")}
//   style={{ width: 70, height: 90 }}
// />
// </View>

export default Payment;

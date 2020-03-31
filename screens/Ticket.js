import React from "react";
import { Text, View, TextInput, StyleSheet, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const Ticket = ({ params }) => (
  <View style={styles.containerTicket}>
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* card myticket */}
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.myTicket}>
          <View>
            <View
              style={{
                paddingLeft: 5,
                backgroundColor: "#D0E6A5",
                width: "30%",
                borderBottomRightRadius: 20,
                elevation: 4
              }}
            >
              <Image
                source={require("../assets/images/LandTickBlack.png")}
                style={{ height: 30, width: 90 }}
              />
            </View>
            <View style={{ position: "absolute", top: 2, right: 10 }}>
              <Text style={styles.textKereta}>Kereta Api</Text>
              <Text style={styles.textDate}>Mon, 13 02 2020</Text>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.cardContentMyTicket}>
                <View
                  style={{
                    height: 30,
                    paddingLeft: 8,
                    paddingRight: 8,
                    justifyContent: "center",
                    marginTop: 5
                  }}
                >
                  <Text style={styles.textKereta}>Argo Wills</Text>
                  <Text style={styles.textDate}>Executive</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFDD94",
                    borderRadius: 10,
                    height: 30,
                    paddingLeft: 8,
                    paddingRight: 8,
                    justifyContent: "center",
                    marginTop: 5,
                    elevation: 4
                  }}
                >
                  <Text style={styles.textDate}>Pending</Text>
                </View>
              </View>
              <View style={styles.cardContentMyTicket}>
                <View
                  style={{
                    height: 30,
                    paddingLeft: 8,
                    paddingRight: 8,
                    justifyContent: "center",
                    marginTop: 5
                  }}
                >
                  <Text style={styles.textKereta}>05:00</Text>
                  <Text style={styles.textDate}>14 02 2020</Text>
                </View>
                <View
                  style={{
                    height: 30,
                    paddingLeft: 8,
                    paddingRight: 8,
                    justifyContent: "center",
                    marginTop: 5
                  }}
                >
                  <Text style={styles.textKereta}>05:00</Text>
                  <Text style={styles.textDate}>14 02 2020</Text>
                </View>
              </View>
              <View style={styles.cardContentStasiun}>
                <View
                  style={{
                    height: 30,
                    paddingLeft: 8,
                    paddingRight: 8,
                    justifyContent: "center",
                    marginTop: 5,
                    width: "110%"
                  }}
                >
                  <Text style={styles.textKereta}>Jakarta (GMR)</Text>
                  <Text style={styles.textDate}>St. Gambir</Text>
                </View>
                <View
                  style={{
                    height: 30,
                    paddingLeft: 8,
                    paddingRight: 8,
                    justifyContent: "center",
                    marginTop: 5,
                    width: "110%"
                  }}
                >
                  <Text style={styles.textKereta}>Surabaya</Text>
                  <Text style={styles.textDate}>St. Surabaya</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {/*end card myticket */}
      {/* card myticket */}
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.myTicket}>
          <View>
            <View
              style={{
                paddingLeft: 5,
                backgroundColor: "#D0E6A5",
                width: "30%",
                borderBottomRightRadius: 20,
                elevation: 4
              }}
            >
              <Image
                source={require("../assets/images/LandTickBlack.png")}
                style={{ height: 30, width: 90 }}
              />
            </View>
            <View style={{ position: "absolute", top: 2, right: 10 }}>
              <Text style={styles.textKereta}>Kereta Api</Text>
              <Text style={styles.textDate}>Mon, 13 02 2020</Text>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.cardContentMyTicket}>
                <View
                  style={{
                    height: 30,
                    paddingLeft: 8,
                    paddingRight: 8,
                    justifyContent: "center",
                    marginTop: 5
                  }}
                >
                  <Text style={styles.textKereta}>Argo Wills</Text>
                  <Text style={styles.textDate}>Executive</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#86E3CE",
                    borderRadius: 10,
                    height: 30,
                    paddingLeft: 8,
                    paddingRight: 8,
                    justifyContent: "center",
                    marginTop: 5,
                    elevation: 4
                  }}
                >
                  <Text style={styles.textDate}>Approved</Text>
                </View>
              </View>
              <View style={styles.cardContentMyTicket}>
                <View
                  style={{
                    height: 30,
                    paddingLeft: 8,
                    paddingRight: 8,
                    justifyContent: "center",
                    marginTop: 5
                  }}
                >
                  <Text style={styles.textKereta}>05:00</Text>
                  <Text style={styles.textDate}>14 02 2020</Text>
                </View>
                <View
                  style={{
                    height: 30,
                    paddingLeft: 8,
                    paddingRight: 8,
                    justifyContent: "center",
                    marginTop: 5
                  }}
                >
                  <Text style={styles.textKereta}>05:00</Text>
                  <Text style={styles.textDate}>14 02 2020</Text>
                </View>
              </View>
              <View style={styles.cardContentStasiun}>
                <View
                  style={{
                    height: 30,
                    paddingLeft: 8,
                    paddingRight: 8,
                    justifyContent: "center",
                    marginTop: 5,
                    width: "110%"
                  }}
                >
                  <Text style={styles.textKereta}>Jakarta (GMR)</Text>
                  <Text style={styles.textDate}>St. Gambir</Text>
                </View>
                <View
                  style={{
                    height: 30,
                    paddingLeft: 8,
                    paddingRight: 8,
                    justifyContent: "center",
                    marginTop: 5,
                    width: "110%"
                  }}
                >
                  <Text style={styles.textKereta}>Surabaya</Text>
                  <Text style={styles.textDate}>St. Surabaya</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {/*end card myticket */}
      {/* card myticket */}
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.myTicket}>
          <View>
            <View
              style={{
                paddingLeft: 5,
                backgroundColor: "#D0E6A5",
                width: "30%",
                borderBottomRightRadius: 20,
                elevation: 4
              }}
            >
              <Image
                source={require("../assets/images/LandTickBlack.png")}
                style={{ height: 30, width: 90 }}
              />
            </View>
            <View style={{ position: "absolute", top: 2, right: 10 }}>
              <Text style={styles.textKereta}>Kereta Api</Text>
              <Text style={styles.textDate}>Mon, 13 02 2020</Text>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.cardContentMyTicket}>
                <View
                  style={{
                    height: 30,
                    paddingLeft: 8,
                    paddingRight: 8,
                    justifyContent: "center",
                    marginTop: 5
                  }}
                >
                  <Text style={styles.textKereta}>Argo Wills</Text>
                  <Text style={styles.textDate}>Executive</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#F3DBCF",
                    borderRadius: 10,
                    height: 30,
                    paddingLeft: 8,
                    paddingRight: 8,
                    justifyContent: "center",
                    marginTop: 5,
                    elevation: 4
                  }}
                >
                  <Text style={styles.textDate}>Rejected</Text>
                </View>
              </View>
              <View style={styles.cardContentMyTicket}>
                <View
                  style={{
                    height: 30,
                    paddingLeft: 8,
                    paddingRight: 8,
                    justifyContent: "center",
                    marginTop: 5
                  }}
                >
                  <Text style={styles.textKereta}>05:00</Text>
                  <Text style={styles.textDate}>14 02 2020</Text>
                </View>
                <View
                  style={{
                    height: 30,
                    paddingLeft: 8,
                    paddingRight: 8,
                    justifyContent: "center",
                    marginTop: 5
                  }}
                >
                  <Text style={styles.textKereta}>05:00</Text>
                  <Text style={styles.textDate}>14 02 2020</Text>
                </View>
              </View>
              <View style={styles.cardContentStasiun}>
                <View
                  style={{
                    height: 30,
                    paddingLeft: 8,
                    paddingRight: 8,
                    justifyContent: "center",
                    marginTop: 5,
                    width: "110%"
                  }}
                >
                  <Text style={styles.textKereta}>Jakarta (GMR)</Text>
                  <Text style={styles.textDate}>St. Gambir</Text>
                </View>
                <View
                  style={{
                    height: 30,
                    paddingLeft: 8,
                    paddingRight: 8,
                    justifyContent: "center",
                    marginTop: 5,
                    width: "110%"
                  }}
                >
                  <Text style={styles.textKereta}>Surabaya</Text>
                  <Text style={styles.textDate}>St. Surabaya</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {/*end card myticket */}
      {/* card myticket */}
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.myTicket}>
          <View>
            <View
              style={{
                paddingLeft: 5,
                backgroundColor: "#D0E6A5",
                width: "30%",
                borderBottomRightRadius: 20,
                elevation: 4
              }}
            >
              <Image
                source={require("../assets/images/LandTickBlack.png")}
                style={{ height: 30, width: 90 }}
              />
            </View>
            <View style={{ position: "absolute", top: 2, right: 10 }}>
              <Text style={styles.textKereta}>Kereta Api</Text>
              <Text style={styles.textDate}>Mon, 13 02 2020</Text>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.cardContentMyTicket}>
                <View
                  style={{
                    height: 30,
                    paddingLeft: 8,
                    paddingRight: 8,
                    justifyContent: "center",
                    marginTop: 5
                  }}
                >
                  <Text style={styles.textKereta}>Argo Wills</Text>
                  <Text style={styles.textDate}>Executive</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#F3DBCF",
                    borderRadius: 10,
                    height: 30,
                    paddingLeft: 8,
                    paddingRight: 8,
                    justifyContent: "center",
                    marginTop: 5,
                    elevation: 4
                  }}
                >
                  <Text style={styles.textDate}>Rejected</Text>
                </View>
              </View>
              <View style={styles.cardContentMyTicket}>
                <View
                  style={{
                    height: 30,
                    paddingLeft: 8,
                    paddingRight: 8,
                    justifyContent: "center",
                    marginTop: 5
                  }}
                >
                  <Text style={styles.textKereta}>05:00</Text>
                  <Text style={styles.textDate}>14 02 2020</Text>
                </View>
                <View
                  style={{
                    height: 30,
                    paddingLeft: 8,
                    paddingRight: 8,
                    justifyContent: "center",
                    marginTop: 5
                  }}
                >
                  <Text style={styles.textKereta}>05:00</Text>
                  <Text style={styles.textDate}>14 02 2020</Text>
                </View>
              </View>
              <View style={styles.cardContentStasiun}>
                <View
                  style={{
                    height: 30,
                    paddingLeft: 8,
                    paddingRight: 8,
                    justifyContent: "center",
                    marginTop: 5,
                    width: "110%"
                  }}
                >
                  <Text style={styles.textKereta}>Jakarta (GMR)</Text>
                  <Text style={styles.textDate}>St. Gambir</Text>
                </View>
                <View
                  style={{
                    height: 30,
                    paddingLeft: 8,
                    paddingRight: 8,
                    justifyContent: "center",
                    marginTop: 5,
                    width: "110%"
                  }}
                >
                  <Text style={styles.textKereta}>Surabaya</Text>
                  <Text style={styles.textDate}>St. Surabaya</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {/*end card myticket */}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  containerTicket: {
    flex: 1,
    flexDirection: "column"
  },
  myTicket: {
    width: "100%",
    height: 160,
    backgroundColor: "white",
    // paddingLeft: 10,
    // paddingRight: 10,
    marginBottom: 2
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
  cardContent: {
    marginTop: 10,
    padding: 10,
    flexDirection: "row"
  },
  cardContentMyTicket: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  cardContentStasiun: {
    width: 200,
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  }
});
export default Ticket;

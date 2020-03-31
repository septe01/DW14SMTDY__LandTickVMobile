import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground
} from "react-native";
import IconMenu from "../components/IconMenu";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const dataScroll = [
  {
    desc: "Lengkapi detail utama profile"
  }
];
const { width, height } = Dimensions.get("window");
const Profile = ({ params }) => (
  <ScrollView
    showsVerticalScrollIndicator={false}
    style={{ position: "relative" }}
  >
    <View style={{ flex: 1 }}>
      {/* <View> */}
      {/* container atas */}
      <View style={styles.containerTop}>
        {/* <ImageBackground
        source={require("../assets/images/bgProfile.jpg")}
        style={{ width: width, height: "100%" }}
      /> */}
        <View style={styles.boxUser}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={styles.textProfile}>SepteHabudin</Text>
            <View
              style={{
                position: "absolute",
                right: 0
              }}
            >
              <IconMenu nama="pencil-alt" color="#205072" size={16} />
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={styles.textProfileUnverified}>Unverified </Text>
            <IconMenu nama="user-check" color="#205072" size={14} />
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <IconMenu nama="award" color="#205072" size={14} />
            <Text style={styles.textProfileBasic}>Basic - 1000</Text>
            <Text style={styles.textProfileColor}>Tick Point</Text>
          </View>
        </View>
      </View>
      {/* container bawah */}
      <View style={styles.containerBottom}>
        <View style={styles.containerBottomProfile}>
          <Text style={{ color: "#455054", fontSize: 14 }}>
            Selesaikan semua misi dan dapatkan{" "}
            <Text style={{ fontWeight: "bold" }}>10.000</Text> Tick Point
          </Text>
          {/* line */}
          <View
            style={{
              height: 3,
              backgroundColor: "white",
              width: "100%",
              marginTop: 10
            }}
          >
            <View
              style={{
                height: "100%",
                backgroundColor: "#205072",
                width: "80%"
              }}
            ></View>
          </View>
          {/* slide */}
        </View>
        {/* scrollHorizontall */}
        <View style={styles.scrollHorizontal}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {/* content 1 */}
            <View style={styles.itemScroll}>
              <View style={styles.scrollIcon}>
                <IconMenu nama="address-card" color="#455054" size={20} />
              </View>
              <View style={{ marginTop: 10, justifyContent: "center" }}>
                <Text style={styles.scrollDesc}>
                  Lengkapi detail utama profile
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 12,
                    color: "#455054"
                  }}
                >
                  2000 <IconMenu nama="award" color="#455054" size={14} />
                </Text>
                <TouchableOpacity activeOpacity={0.7}>
                  <View style={{ padding: 15, marginTop: -19 }}>
                    <View style={styles.scrollBtn}>
                      <Text
                        style={{
                          textAlign: "center",
                          marginHorizontal: 10,
                          color: "#455054",
                          fontSize: 14,
                          fontWeight: "bold"
                        }}
                      >
                        Lengkapi
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {/* content 2 */}
            <View style={styles.itemScroll}>
              <View style={styles.scrollIcon}>
                <IconMenu nama="user-plus" color="#455054" size={20} />
              </View>
              <View style={{ marginTop: 10, justifyContent: "center" }}>
                <Text style={styles.scrollDesc}>
                  Tambah dan Lengkapi profile
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 12,
                    color: "#455054"
                  }}
                >
                  2000 <IconMenu nama="award" color="#455054" size={14} />
                </Text>
                <TouchableOpacity activeOpacity={0.7}>
                  <View style={{ padding: 15, marginTop: -19 }}>
                    <View style={styles.scrollBtn}>
                      <Text
                        style={{
                          textAlign: "center",
                          marginHorizontal: 10,
                          color: "#455054",
                          fontSize: 14,
                          fontWeight: "bold"
                        }}
                      >
                        Tambah
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {/* content 3 */}
            <View style={styles.itemScroll}>
              <View style={styles.scrollIcon}>
                <IconMenu nama="file-contract" color="#455054" size={20} />
              </View>
              <View style={{ marginTop: 10, justifyContent: "center" }}>
                <Text style={styles.scrollDesc}>Gabung Ke Lantick</Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 12,
                    color: "#455054"
                  }}
                >
                  1000 <IconMenu nama="award" color="#455054" size={14} />
                </Text>
                <TouchableOpacity activeOpacity={0.7}>
                  <View style={{ padding: 15, marginTop: -19 }}>
                    {/* <View style={styles.scrollBtn}> */}
                    <View style={styles.misiSelesai}>
                      <Text style={styles.textMisi}>Misi selesai</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {/* content 4 */}
            <View style={styles.itemScroll}>
              <View style={styles.scrollIcon}>
                <IconMenu nama="mobile-alt" color="#455054" size={20} />
              </View>
              <View style={{ marginTop: 10, justifyContent: "center" }}>
                <Text style={styles.scrollDesc}>Verifikasi nomer ponselmu</Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 12,
                    color: "#455054"
                  }}
                >
                  5000 <IconMenu nama="award" color="#455054" size={14} />
                </Text>
                <TouchableOpacity activeOpacity={0.7}>
                  <View style={{ padding: 15, marginTop: -19 }}>
                    <View style={styles.misiSelesai}>
                      <Text style={styles.textMisi}>Misi selesai</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>

        <View
          style={{ backgroundColor: "white", height: "100%", width: "100%" }}
        >
          <View style={styles.listProfile}>
            <View style={styles.listContentSetting}>
              <View style={{ flex: 1 }}>
                <IconMenu nama="address-card" color="#455054" size={26} />
              </View>
              <View style={{ flex: 6 }}>
                <View>
                  <Text style={styles.itemTitelList}>Smart Profile</Text>
                  <Text style={styles.itemTitelListDesc}>
                    Pesan lebih cepat, isi data penumpang dengan satu klik
                  </Text>
                </View>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <IconMenu nama="chevron-right" color="#cacaca" size={20} />
              </View>
            </View>

            <View style={styles.listContentSetting}>
              <View style={{ flex: 1 }}>
                <IconMenu nama="address-card" color="#455054" size={26} />
              </View>
              <View style={{ flex: 6 }}>
                <View>
                  <Text style={styles.itemTitelList}>Smart Pay</Text>
                  <Text style={styles.itemTitelListDesc}>
                    Cara membayar dan menerima refund yang lebih cepat dan aman
                  </Text>
                </View>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <IconMenu nama="chevron-right" color="#cacaca" size={20} />
              </View>
            </View>

            <View style={styles.listContentSettingBottom}>
              <View style={{ flex: 1 }}>
                <IconMenu nama="address-card" color="#455054" size={26} />
              </View>
              <View style={{ flex: 6 }}>
                <View>
                  <Text style={styles.itemTitelList}>Daftar Refund</Text>
                  <Text style={styles.itemTitelListDesc}>
                    Cek semua pengajuan refund aktif di satu tempat
                  </Text>
                </View>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <IconMenu nama="chevron-right" color="#cacaca" size={20} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  containerBottom: {
    flex: 4,
    flexDirection: "column",
    // backgroundColor: "white",
    position: "relative",
    zIndex: -2
  },
  boxUser: {
    flex: 1,
    height: 100,
    backgroundColor: "rgba(255,255,255,1)",
    width: width - 20,
    borderRadius: 10,
    padding: 10,
    bottom: -36,
    // position: "absolute",
    zIndex: 2,
    elevation: 4
  },
  textProfile: {
    color: "#455054",
    fontSize: 18,
    fontWeight: "bold"
  },
  textProfileBasic: {
    marginHorizontal: 10,
    color: "#455054",
    fontSize: 14,
    fontWeight: "bold"
  },
  textProfileColor: {
    color: "#455054",
    fontSize: 14
  },
  textProfileUnverified: {
    marginRight: 10,
    color: "#FB7BFB",
    fontSize: 14
  },
  containerBottomProfile: {
    marginTop: 60,
    paddingHorizontal: 10
  },
  scrollHorizontal: {
    height: 240,
    width: width,
    marginTop: 6,
    paddingVertical: 10
  },
  itemScroll: {
    width: 200,
    // heigth: 200,
    backgroundColor: "white",
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 10,
    marginVertical: 20,
    paddingHorizontal: 10
  },
  scrollIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#D0E6A5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    elevation: 3
  },
  scrollDesc: {
    textAlign: "center",
    marginHorizontal: 10,
    color: "#455054",
    fontSize: 14,
    fontWeight: "bold"
  },
  scrollBtn: {
    marginTop: 20,
    // width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D0E6A5",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    elevation: 2
  },
  misiSelesai: {
    marginTop: 20,
    // width: 100,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#D0E6A5",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4
    // elevation: 2
  },
  textMisi: {
    textAlign: "center",
    marginHorizontal: 10,
    color: "#D0E6A5",
    fontSize: 14,
    fontWeight: "bold",
    textShadowColor: "#eaeaea",
    textShadowOffset: {
      width: 1,
      height: 0
    },
    textShadowRadius: 0.2
  },
  listProfile: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    padding: 10
  },
  listContentSetting: {
    flexDirection: "row",
    padding: 4,
    paddingBottom: 6,
    paddingTop: 6,
    height: 60,
    width: "100%",
    borderBottomColor: "#eaeaea",
    borderBottomWidth: 1,
    alignItems: "center"
  },
  listContentSettingBottom: {
    flexDirection: "row",
    padding: 4,
    paddingBottom: 6,
    paddingTop: 6,
    height: 60,
    width: "100%",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    alignItems: "center"
  },
  itemTitelList: {
    color: "#455054",
    fontSize: 14,
    fontWeight: "bold"
  },
  itemTitelListDesc: {
    color: "#9B9B9B"
  }
});
export default Profile;

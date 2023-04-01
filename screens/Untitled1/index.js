import { dogbreedapi_get_random_read } from "../../store/dogBreedAPI/dogbreedapi_response_get_Randoms.slice.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const dispatch = useDispatch();
  const {
    entities: dogbreedapi_response_get_Random
  } = useSelector(state => state.dogbreedapi_response_get_Random);
  useEffect(() => {
    dispatch(dogbreedapi_get_random_read());
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Text style={styles.GOhZHUow}>Dog IMG: {dogbreedapi_response_get_Random[0].message}</Text><Text style={styles.PdhnSTTo}>Status: {dogbreedapi_response_get_Random[0].status}</Text></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  GOhZHUow: {
    width: 347,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center"
  },
  PdhnSTTo: {
    width: 347,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center"
  }
});
export default Untitled1;
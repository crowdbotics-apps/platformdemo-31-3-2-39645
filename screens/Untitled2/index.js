import { useSelector } from "react-redux";
import { Text } from "react-native";
import { useEffect } from "react";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  const {
    entities: dogbreedapi_response_get_Random
  } = useSelector(state => state.dogbreedapi_response_get_Random);
  useEffect(() => {}, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      flex: 1,
      flexDirection: 'column',
      height: '100%',
      padding: 10,
      backgroundColor: '#f0f0f1'
    }}>
        
          <View style={styles.column1}><Text style={styles.VJCfEYrJ}>Dog IMG: {dogbreedapi_response_get_Random[0].message}</Text><Text style={styles.YxFWHwbH}>Status: {dogbreedapi_response_get_Random[0].status}</Text></View>
          <View style={styles.column2}></View>
          <View style={styles.column3}></View>
        
        </ScrollView>
      </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  column1: {
    flex: 1
  },
  column2: {
    flex: 1
  },
  column3: {
    flex: 1
  },
  VJCfEYrJ: {
    width: 337,
    height: 55,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  YxFWHwbH: {
    width: 336,
    height: 83,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled2;
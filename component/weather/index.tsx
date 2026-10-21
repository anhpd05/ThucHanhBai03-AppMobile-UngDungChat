import { StyleSheet, Text, View } from 'react-native';

export function Weather() {
  return (
    <>
      <View style={style.viewHienThi}>
        <Text style={style.tenThanhPho}> Hà nội</Text>
        <Text style={style.nhietDo}> 30 độ C</Text>
      </View>
    </>
  );
}
const style = StyleSheet.create({
  viewHienThi: {
    gap: 10,
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  tenThanhPho: {
    fontSize: 20,
    fontWeight: 400,
  },
  nhietDo: {
    fontSize: 26,
    fontWeight: 600,
  },
});

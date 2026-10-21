import { Text, View } from 'react-native';

export function WeatherEnd() {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          borderStyle: 'solid',
          paddingHorizontal: 12,
          paddingVertical: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 16, fontWeight: 500 }}>10:00 PM</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Text style={{ fontSize: 16, fontWeight: 500 }}>Mưa</Text>
          <Text style={{ fontSize: 16, fontWeight: 500 }}>30 độ C</Text>
        </View>
      </View>
    </>
  );
}

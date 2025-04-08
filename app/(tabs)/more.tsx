import { StyleSheet, Text, View, Button } from 'react-native';
import * as Battery from 'expo-battery';
import { useEffect, useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Will Be Available Soon...</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    shadowColor: '#fff',
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    textShadowColor: '#fff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
});


/*
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [isPluggedIn, setIsPluggedIn] = useState(false);

  const checkBatteryStatus = async () => {
    try {
      const power = await Battery.getPowerStateAsync();
      const level = power.batteryLevel;
      const pluggedIn =
        power.batteryState === Battery.BatteryState.CHARGING ||
        power.batteryState === Battery.BatteryState.FULL;

      setBatteryLevel(level);
      setIsPluggedIn(pluggedIn);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => 
    checkBatteryStatus();
    const subscription = Battery.addBatteryStateListener((newState) => {
      const pluggedIn =
        newState.batteryState === Battery.BatteryState.CHARGING ||
        newState.batteryState === Battery.BatteryState.FULL;
      setIsPluggedIn(pluggedIn);
    });
    const interval = setInterval(() => {
      checkBatteryStatus();
    }, 10000);

    return () => {
      subscription.remove();
      clearInterval(interval);
    };
  }, []); */
  
  /*
  return (
    
    <View style={styles.container}>
      <Text style={{ color: '#fff', fontSize: 18 }}>
        {batteryLevel !== null
          ? `Current Battery Level: ${(batteryLevel * 100).toFixed(2)}%`
          : 'Loading battery level...'}
      </Text>
      <Button title="Check Charging Status" onPress={checkBatteryStatus} />
      {batteryLevel !== null && (batteryLevel * 100) >= 60 && isPluggedIn && (
        <Text style={{ color: '#0f0', fontSize: 18, marginTop: 10 }}>
          Your battery is fully charged!
        </Text>
      )}
    </View>
  );

  */
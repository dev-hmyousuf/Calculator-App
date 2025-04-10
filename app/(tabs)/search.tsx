import { StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard } from 'react-native'; 
import { useState } from 'react'; 
import convert from 'convert-units';

// SVG Icons 
import Bolt from "@/assets/iconSvg/bolt.svg"; 
import Ruler from "@/assets/iconSvg/ruler.svg"; 
import Excercise from "@/assets/iconSvg/excercise.svg"; 
import Area from "@/assets/iconSvg/area.svg"; 
import VoiceEq from "@/assets/iconSvg/voiceEq.svg";

const Button = ({ label = "Length", Icon, iconStyle }) => { 
  return ( 
    <TouchableOpacity activeOpacity={0.8} style={styles.button}> 
      {Icon && <Icon width={28} height={28} style={iconStyle} />} 
      <Text style={styles.label}>{label}</Text> 
    </TouchableOpacity> 
  ); 
};

export default function UnitConverterScreen() { 
  const [prompt, setPrompt] = useState(''); 
  const [result, setResult] = useState('');

  const convertUnit = (input: string): string => { 
    try { 
      const regex = /(\d+(\.\d+)?)\s*(\w+)\s+(to|in)\s+(\w+)/i; 
      const match = input.match(regex); 
      if (!match) return "Invalid input. Try '34 cm to mm'.";

      const value = parseFloat(match[1]);
      const from = match[3].toLowerCase();
      const to = match[5].toLowerCase();

      const possibilities = convert().possibilities().map(u => u.toLowerCase());

      if (!possibilities.includes(from)) {
        return `'${from}' unit not supported.`;
      }
      if (!possibilities.includes(to)) {
        return `'${to}' unit not supported.`;
      }

      const converted = convert(value).from(from).to(to);
      return `${value} ${from} = ${converted} ${to}`;
    } catch (e) {
      return "Conversion failed. Possibly incompatible units.";
    }
  };

  return ( 
    <View style={styles.container}> 
      <Text style={styles.header}>Fitness Set</Text>

      {/* CATEGORY BUTTONS */}
      <View style={styles.wrapper}>
        <Button label="Length" Icon={Ruler} iconStyle={{ color: 'red' }} />
        <Button label="Weight" Icon={Bolt} iconStyle={{ color: 'blue' }} />
        <Button label="Exercise" Icon={Excercise} iconStyle={{ color: 'blue' }} />
        <Button label="Area" Icon={Area} iconStyle={{ color: 'blue' }} />
      </View>

      {/* BOTTOM WRAPPER */}
      <View style={styles.bottomWrapper}>
        <View style={styles.bottomTitle}>
          <Text style={styles.bottomText}>Unit Converter</Text>
        </View>

        {/* RESULT */}
        {result !== '' && (
          <Text style={styles.resultText}>{result}</Text>
        )}

        {/* INPUT FIELD */}
        <View style={styles.instantBtn}>
          <TextInput
            style={{ color: "#fff", flex: 1 }}
            placeholder="Try like: 34 cm to mm"
            placeholderTextColor="#aaa"
            value={prompt}
            onChangeText={(text) => {
              setPrompt(text);
              setResult(convertUnit(text));
            }}
            onSubmitEditing={() => Keyboard.dismiss()}
          />
          <View style={{ padding: 10, borderRadius: 100, backgroundColor: "#1a1a1a" }}>
            <VoiceEq />
          </View>
        </View>

        <Text style={styles.hint}>Supports all common units: cm, kg, F, m², etc.</Text>

        <View style={styles.allCtgBtn}>
          <Text>All Categories</Text>
        </View>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#f3f2f7',
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  wrapper: {
    borderRadius: 20,
    backgroundColor: '#fff',
    width: '90%',
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    padding: 15,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  button: {
    width: "48%",
    backgroundColor: '#f3f2f7',
    borderRadius: 20,
    flexDirection: 'row',
    padding: 12,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
  },
  instantBtn: {
    width: "90%",
    backgroundColor: "#000",
    borderRadius: 30,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingHorizontal: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  hint: {
    color: "#444",
    marginTop: 10,
  },
  allCtgBtn: {
    marginTop: 20,
    width: "50%",
    backgroundColor: "#fff",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: "#000",
  },
  bottomTitle: {
    width: '100%',
    backgroundColor: '#ff6347',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 50,
    marginTop: 20,
  },
  bottomWrapper: {
    width: '100%',
    gap : 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    position: "absolute",
    bottom: 0,
    paddingBottom: 20,
    
  },
  bottomText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  }
});
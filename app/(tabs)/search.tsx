import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput  } from 'react-native';
import Bolt from "@/assets/iconSvg/bolt.svg";
import Ruler from "@/assets/iconSvg/ruler.svg";
import Excercise from "@/assets/iconSvg/excercise.svg";
import Area from "@/assets/iconSvg/area.svg";
import VoiceEq from "@/assets/iconSvg/voiceEq.svg"


const Button = ({ label = "Length", Icon, iconStyle }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button}>
      {Icon && <Icon width={32} height={32} style={iconStyle} />}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default function Bmi() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Fitness Set</Text>
      <View style={styles.wrapper}>
        <Button 
          label="Length" 
          Icon={Ruler} 
          iconStyle={{ color: 'red' }} 
        />
        <Button 
          label="Weight" 
          Icon={Bolt} 
          iconStyle={{ color: 'blue' }} 
        />
        <Button 
          label="Excercise" 
          Icon={Excercise} 
          iconStyle={{ color: 'blue' }} 
        />
        <Button 
          label="Area" 
          Icon={Area} 
          iconStyle={{ color: 'blue' }} 
        />
        
      </View>
      <View style={styles.bottomWrapper}>
        <View style={styles.instantBtn}>
          <TextInput 
            style={{ color: "#fff" }} 
            placeholder="Convert Instantly" 
            placeholderTextColor="#aaa" 
          />
          <View style={{padding : 10, borderRadius : "50%", backgroundColor : "#1a1a1a"}}>
            <VoiceEq  />
          </View>
         
        </View>
        <Text style={{ color : "#1a1a1a" }}>Enter the measurement you want to convert</Text>
        <View style={styles.allCtgBtn}><Text>All Categories</Text></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f2f7',
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
    width : "48%",
    backgroundColor: '#f3f2f7',
    borderRadius: 20,
    flexDirection: 'row',
    padding: 15,
    gap: 10,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  header : {
    fontSize : 24,
    fontWeight : "bold",
    marginBottom : 20,
  },
  bottomWrapper : {
    position : "absolute",
    bottom : 0,
    width : "100%",
    justifyContent : "center",
    alignItems : "center",
    backgroundColor : "#fff",
    gap : 10,
    borderRadius : 30,
    paddingVertical : 10,
  },
  instantBtn : {
    width : "95%",
    height : 50,
    backgroundColor : "#000",
    borderRadius : 30,
    justifyContent : "space-between",
  	alignItems : "center",
    flexDirection : "row",
    paddingVertical : 10,
    paddingHorizontal : 30,
    height : "auto",
    backgroundColor : "#000",
  },
  allCtgBtn : {
    width : "50%",
    height : 50,
    backgroundColor : "#fff",
    borderRadius : 30,
    justifyContent : "center",
  	alignItems : "center",
    flexDirection : "row",
    paddingVertical : 10,
    paddingHorizontal : 30,
    height : "auto",
    backgroundColor : "#fff",
    borderWidth : 1,
    borderColor : "#000",
    marginVertical : 10
  }
});
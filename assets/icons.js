import { AntDesign, Feather } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const icons = {
    index: (props)=> <AntDesign name="home" size={26} {...props} />,
    bmi: (props)=><MaterialIcons name="calculate" size={24} {...props} />,
    create: (props)=> <AntDesign name="pluscircleo" size={26} {...props} />,
    profile: (props)=> <AntDesign name="user" size={26} {...props} />,
}
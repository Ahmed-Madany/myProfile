import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Info from './components/Info';
import Languages from './components/Languages';
import Skills from './components/Skills';
import ExtraSkills from './components/ExtraSkills';
import DownloadButton from './components/DownloadButton';



export default function App() {
  return (
 <>
 
<ScrollView>
<Header/>
<Info/>
<Languages/>
<Skills/>
<ExtraSkills/>
<DownloadButton/>



</ScrollView>
 
 </>
  );
}

const styles = StyleSheet.create({

});

import React, {useState} from 'react';
import { SafeAreaView } from 'react-native';
import Search from "./src/components/Search";
import ListResults from "./src/components/ListResults";
import data from "./src/helpers/filmDatas"

export default function App() {
  const [searchMovieTitle, setSearchMovieTitle] = useState("")

    const newData = data.filter(datum => searchMovieTitle !== "" ? datum.title.toUpperCase().includes(searchMovieTitle.toUpperCase()) : datum.title);

  
  return (
  <>
    <SafeAreaView style={{ flex: 0, backgroundColor: '#FD6E58' }} />
    <SafeAreaView style={{ flex: 1}}>
      <Search setSearchMovieTitle={setSearchMovieTitle}/>
      <ListResults newData={newData}/>
    </SafeAreaView>
  </>
  );
}

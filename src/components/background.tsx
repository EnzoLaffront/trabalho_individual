import {ImageBackground, StyleSheet} from 'react-native'
import {Game} from "./game"

import Background from "./../../assets/background.png"

const Home = () => {
    return(
        <ImageBackground source={Background} style={styles.container}>

            <Game/>

        </ImageBackground>
    )
}

export const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#71C5CF"
    }





})

export {Home};
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


    export default class MapView extends React.Component {

        constructor(props) {
            super(props);
            this.state = { dropoff: '' };
            this.state = { pickup: '' };
        }

        render(){

            return (
                <View style={styles.rectangle}>
                    <View style={styles.head}>
                    <Text style={styles.header}>Current Location</Text>
                    <Text style={styles.subHeader}>106 Seagram Dr, Waterloo ON</Text>
                    </View>
                    <View style={styles.below}>
                    <View style={styles.inLine}>
                        <MaterialIcons
                        style={styles.icon}
                        name='dropoff'
                        name='my-location'
                        size={24}
                        color='#878181'
                        />
                        <TextInput
                        style={styles.input}
                        placeholder='  Enter your pick-up point'
                        name='pickup'
                        {...this.props}
                        value={this.state.pickup}
                        onChangeText={ (pickup) => this.setState({ pickup }) }
                        />
                    </View>
                    <View style={styles.inLine}>
                        <Ionicons
                        style={styles.icon}
                        name='location-sharp'
                        size={24}
                        color='#878181'
                        />
                        <TextInput
                        {...this.props}
                        style={styles.input}
                        placeholder='  Enter your drop-off point'
                        value={this.state.dropoff}
                        onChangeText={ (dropoff) => this.setState({ dropoff }) }
                        />
                    </View>
                    </View>
                </View>
                );
            }
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    rectangle: {
        height: 148,
        width: 370,
        borderRadius: 25,
        borderColor: '#7C63E3',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        backgroundColor: '#fff',
        position: 'absolute',
        zIndex: 10,
        top: '7%',
    },
    header: {
        fontWeight: '600',
    },
    subHeader: {
        fontWeight: 'normal',
    },
    input: {
        marginTop: '3%',
        fontSize: 15,
        fontWeight: 'normal',
        color: '#C4C4C4',
        backgroundColor: '#F3F3F3',
        height: 30,
        width: 280,
    },
    head: {
        alignItems: 'center',
        fontSize: 13,
        fontFamily: 'Open Sans',
        color: '#3C3C3C',
        top: '10%',
    },
    below: {
        alignItems: 'center',
        top: '13%',
    },
    inLine: {
        flexDirection: 'row',
    },
    icon: {
        top: '3%',
        marginRight: '3%',
    },
    });

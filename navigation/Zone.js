
      // latitudeDelta:0.0922,
      // longitudeDelta:0.0421,
      // [106.79807670391571,10.865385303360243], 
      // [106.80739748382999,10.873913736498887], 
      // [106.81112579576306,10.885388782710251 ], 
      // [106.8040329096465, 10.890300146055639 ], 
      // [106.79121115389263,10.891862835643485 ], 
      // [106.78284518565258,10.889228582831146 ],
      //  [106.77297879919556,10.881459633792876 ], 
      //  [106.77061450382337,10.876682076061547 ],
      //   [106.77461561906861,10.870252344833935 ], 
      //   [106.78698270255393, 10.868287677095443 ], 
      import React, { Component } from 'react';
      import { Dimensions, Text, View } from 'react-native';
      import MapView, { Callout, Marker, Polygon } from 'react-native-maps';
      import data from './point';
      const { width, height } = Dimensions.get('window');
      
      export default class App extends Component {
        constructor() {
          super();
      



          this.state = {

            
            region: {
              latitude: 10.865385303360243,
              longitude: 106.79807670391571,
              latitudeDelta: 0.03,
              longitudeDelta: 0.03
            },
            
            polygons: [
              
              {
                coordinates: [
                  { longitude: 106.79807670391571, latitude: 10.865385303360243 },
                  { longitude: 106.80739748382999, latitude: 10.873913736498887 },
                  { longitude: 106.81112579576306, latitude: 10.885388782710251 },
                  { longitude: 106.8040329096465, latitude: 10.890300146055639 },
                  { longitude: 106.79121115389263, latitude: 10.891862835643485 },
                  { longitude: 106.78284518565258, latitude: 10.889228582831146 },
                  { longitude: 106.77297879919556, latitude: 10.881459633792876 },
                  { longitude: 106.77061450382337, latitude: 10.876682076061547 },
                  { longitude: 106.77461561906861, latitude: 10.870252344833935 },
                  { longitude: 106.78698270255393, latitude: 10.868287677095443 },
                
                ],
                open: false,
              },
              
            ],
          };
        }
      
        toggle(polygon) {
          console.log('onPress', polygon.open);
      
          if (polygon.open) {
            polygon.marker.hideCallout();
          } else {
            polygon.marker.showCallout();
          }
      
          polygon.open = !polygon.open;
        }
      
        render() {
          return (
            <View style={styles.container}>
              <MapView style={styles.map} initialRegion={this.state.region}>
                {this.state.polygons.map((polygon, index) => (
                  <View key={index}>
                    <Polygon
                      coordinates={polygon.coordinates}
                      fillColor="rgba(0, 200, 0, 0.5)"
                      strokeColor="rgba(0,0,0,0.5)"
                      strokeWidth={2}
                      onPress={() => this.toggle(polygon)}
                    />
                    <Marker
                      ref={ref => polygon.marker = ref}
                      coordinate={polygon.coordinates[0]}>
                      <Callout>
                        <Text>Hello!</Text>
                      </Callout>
                    </Marker>
                    {/* <Marker
                     ref={ref => data.coordinates = ref}

                      // coordinate={data.coordinates[0]}
                      >
                      </Callout>
                    </Marker> */}
                  </View>
                ))}
              </MapView>
            </View>
          );
        }
      }
      
      const styles = {
        container: {
          alignItems: 'stretch',
          flex: 1,
        },
        map: {
          flex: 1,
        },
      };

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
      import { Dimensions, Text, View ,Image,TouchableOpacity} from 'react-native';
      import MapView, { Callout, Marker, Polygon } from 'react-native-maps';
      import data from './point';
      const { width, height } = Dimensions.get('window');
      const img = require('../assets/point.png')
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
                      fillColor="rgba(0, 255, 0, 0.1)"
                      strokeColor="rgba(0,0,0,0.5)"
                      strokeWidth={2}
                      onPress={() => this.toggle(polygon)}
                    />
                    <Marker image={img}
                    // https://cdn-icons-png.flaticon.com/512/5266/5266122.png
                      // ref={ref => polygon.marker = ref}
                      coordinate={{ longitude: 106.80534451057385, latitude: 10.880716731633443 }}>
                        

                      <Callout>
                        <Text>Trường Đại học Bách khoa</Text>
                      </Callout>  

                    </Marker>

                    <Marker image={img}
                      // ref={ref => polygon.marker = ref}
                      coordinate={{ longitude: 106.79918062591409, latitude: 10.8758357426281 }}>
                      <Callout>
                        <Text>Trường Đại học Khoa học Tự nhiên</Text>
                      </Callout>
                    </Marker>
                   
                    <Marker image={img}
                      // ref={ref => polygon.marker = ref}
                      coordinate={{ longitude: 106.80209849707911, latitude: 10.872081072483068 }}>
                      <Callout>
                        <Text>Trường Đại học Khoa học Xã hội và Nhân văn</Text>
                      </Callout>
                    </Marker>

                    <Marker image={img}
                      // ref={ref => polygon.marker = ref}
                      coordinate={{ longitude: 106.80163032591521, latitude: 10.8777322971507 }}>
                      <Callout>
                        <Text>Trường Đại học Quốc tế</Text>
                      </Callout>
                    </Marker>

                    <Marker image={img}
                      // ref={ref => polygon.marker = ref}
                      coordinate={{ longitude: 106.80305394771223, latitude: 10.870166847460377 }}>
                      <Callout>
                        <Text>Trường Đại học Công nghệ Thông tin</Text>
                      </Callout>
                    </Marker>

                    <Marker image={img}
                      // ref={ref => polygon.marker = ref}
                      coordinate={{ longitude: 106.77830268399818, latitude: 10.87065230062484 }}>
                      <Callout>
                        <Text>Trường Đại học Kinh tế – Luật</Text>
                      </Callout>
                    </Marker>

                    <Marker image={img}
                      // ref={ref => polygon.marker = ref}
                      coordinate={{ longitude: 106.78251843940893, latitude: 10.882364774374935 }}>
                      <Callout>
                        <Text>Ký túc xá Khu B Đại học Quốc gia TP.HCM</Text>
                      </Callout>
                    </Marker>

                    <Marker image={img}
                      // ref={ref => polygon.marker = ref}
                      coordinate={{ longitude: 106.80631205474928, latitude: 10.878455113046424 }}>
                      <Callout>
                        <Text>Ký túc xá Khu A Đại học Quốc gia TP.HCM</Text>
                      </Callout>
                    </Marker>
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
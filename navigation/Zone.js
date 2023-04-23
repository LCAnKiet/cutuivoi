import React, { Component } from 'react';
import { Dimensions, Text, View, Image, TouchableOpacity } from 'react-native';
import MapView, { Callout, Marker, Polygon } from 'react-native-maps';
import { point } from '@turf/helpers';
import destination from '@turf/destination';
import * as Location from 'expo-location';

const { width, height } = Dimensions.get('window');
const img = require('../assets/point.png')
const loc = require('../assets/circle.png')
const rm = require('../assets/remove.png')

export default class App extends Component {




  constructor(props) {
    super(props);
    this.state = {
      //location
      elements: [],
      south: null,
      west: null,
      north: null,
      east: null,
      //regiom
      region: {
        latitude: 10.865385303360243,
        longitude: 106.79807670391571,
        latitudeDelta: 0.02,
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
  //
  onRegionChangeComplete = (region) => {
    //111キロメートルから中心点から縦幅、横幅を計算
    const center = point([region.longitude, region.latitude])
    const verticalMeter = 111 * region.latitudeDelta / 2
    const horizontalMeter = 111 * region.longitudeDelta / 2
    //実際の距離を計算
    const options = { units: 'kilometers' }
    const south = destination(center, verticalMeter, 180, options)
    const west = destination(center, horizontalMeter, -90, options)
    const north = destination(center, verticalMeter, 0, options)
    const east = destination(center, horizontalMeter, 90, options)
    //計算結果（GeoJson）からbboxを保存する
    this.setState({
      south: south.geometry.coordinates[1],
      west: west.geometry.coordinates[0],
      north: north.geometry.coordinates[1],
      east: east.geometry.coordinates[0],
    })
  }
  fetchToilet = async () => {
    const south = this.state.south;
    const west = this.state.west;
    const north = this.state.north;
    const east = this.state.east;
    const body = `
            [out:json];
            (
                node
                [amenity=kindergarten]
                (${south},${west},${north},${east});

            );
            out;
            `;

    const options = {
      method: 'POST',
      body: body,
    };

    try {
      const response = await fetch(
        'https://overpass-api.de/api/interpreter',
        options
      );
      const json = await response.json();
      this.setState({ elements: json.elements });
    } catch (e) {
      console.log(e);
    }
  };
  //
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
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.btn}>
            <TouchableOpacity onPress={() => this.fetchToilet()}
>
              <Image source={(loc)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity>
              <Image source={(rm)}
              />
            </TouchableOpacity>
          </View>
        </View>



        <MapView
          onRegionChangeComplete={this.onRegionChangeComplete}
          showsUserLocation
          style={styles.map}
          initialRegion={{
            latitude: 10.762622,
            longitude: 106.660172,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}>

          {
            this.state.elements.map((element) => {

              let title = "保育園"
              if (element.tags["name"] !== undefined) {
                title = element.tags["name"]
              }
              return (<MapView.Marker
                coordinate={{
                  latitude: element.lat,
                  longitude: element.lon,
                }}
                title={title}
                key={"id_" + element.id}
              />)
            })

          }

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
  btn: {
    marginTop: 25,
    zIndex: -1,
    padding: 10,
    alignItems: 'center'

  }
};
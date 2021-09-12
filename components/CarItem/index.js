import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCog,
  faToolbox,
  faFan,
  faKey,
  faLock,
  faUnlockAlt,
} from '@fortawesome/free-solid-svg-icons';
import Menu from '../Menu';

const CarItem = () => {
  const [locked, setLocked] = useState(false);
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/background.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faCog} size={20} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>TeslaMobile</Text>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faToolbox} size={20} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.batterySection}>
        <Image
          source={require('../../assets/battery.png')}
          style={styles.batteryImage}
        />
        <Text style={styles.batteryText}>150 mi</Text>
      </View>
      <View style={styles.status}>
        <Text style={styles.statusText}>Parked</Text>
      </View>
      <ScrollView>
        <View style={styles.controls}>
          <TouchableOpacity>
            <View style={styles.controlButtons}>
              <FontAwesomeIcon icon={faFan} size={24} style={styles.icon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.controlButtons}>
              <FontAwesomeIcon icon={faKey} size={24} style={styles.icon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setLocked(!locked);
            }}
          >
            <View style={styles.controlButtons}>
              <FontAwesomeIcon
                icon={locked ? faLock : faUnlockAlt}
                size={24}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Menu />
      </ScrollView>
    </View>
  );
};

export default CarItem;

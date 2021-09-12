import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMusic, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import items from './items.js';

const Menu = () => {
  return (
    <View style={styles.menuItems}>
      {items.map((item) => (
        <TouchableOpacity key={item.id}>
          <View style={styles.menuRow}>
            <FontAwesomeIcon icon={item.icon} size={20} style={styles.icon} />
            <View style={styles.menuTextbox}>
              <Text style={styles.menuText}>{item.title}</Text>
              {item?.subTitle && (
                <Text style={styles.subtitle}>{item?.subTitle}</Text>
              )}
            </View>
            <FontAwesomeIcon
              icon={faChevronRight}
              size={20}
              style={styles.arrowIcon}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Menu;

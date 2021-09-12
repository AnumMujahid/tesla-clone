import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
  },
  header: {
    marginTop: 35,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 7.5,
  },
  headerTitle: {
    color: 'white',
    fontSize: 13,
  },
  icon: {
    color: 'white',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  batterySection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  batteryImage: {
    height: 22,
    width: 60,
    resizeMode: 'contain',
    marginRight: 8,
  },
  batteryText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  status: {
    alignItems: 'center',
  },
  statusText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 100,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  controlButtons: {
    borderWidth: 0.5,
    borderColor: 'white',
    padding: 18,
    borderRadius: 50,
    marginLeft: 12,
    marginRight: 12,
  },
});

export default styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16
  },

  button: {
    width: '100%',
    height: 50,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00a86b',
    borderRadius: 8
  },

  textButton: {
    fontSize: 16,
    color: '#fff',
  },

  inputText: {
    width: '100%',
    height: 50,
    marginTop: 18,
    borderWidth: 1,
    borderRadius: 8
  },

  errorView: {
    width: '100%',
    height: 50,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: '#ff0000',
    borderRadius: 8
  },

  errorText: {
    fontSize: 16,
    color: '#fff',
  },

});

export default styles;
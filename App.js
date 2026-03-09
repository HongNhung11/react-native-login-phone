import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';

export default function App() {

  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const phoneRegex = /^0[0-9]{9}$/;

  // format + validation khi nhập
  const handleChangeText = (text) => {

    // chỉ giữ lại số
    const formatted = text.replace(/[^0-9]/g, '');

    setPhone(formatted);

    if (formatted.length > 0 && !phoneRegex.test(formatted)) {
      setError("Số điện thoại không đúng định dạng");
    } else {
      setError("");
    }
  };

  // validation khi click button
  const validatePhone = () => {

    if (!phoneRegex.test(phone)) {
      Alert.alert("Lỗi", "Số điện thoại không đúng định dạng!");
    } else {
      Alert.alert("Thành công", "Số điện thoại hợp lệ!");
    }

  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Đăng nhập</Text>

      <Text style={styles.label}>Nhập số điện thoại</Text>

      <Text style={styles.desc}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="numeric"
        value={phone}
        onChangeText={handleChangeText}
        maxLength={10}
      />

      {/* hiển thị lỗi */}
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity
        style={[
          styles.button,
          phone.length < 10 && { backgroundColor: '#e0e0e0' },
        ]}
        disabled={phone.length < 10}
        onPress={validatePhone}
      >
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },

  desc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 16,
    paddingVertical: 8,
  },

  error: {
    color: 'red',
    marginTop: 6,
    marginBottom: 20
  },

  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

});

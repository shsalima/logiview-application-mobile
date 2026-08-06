import { TextInput, StyleSheet } from "react-native";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
}

export default function SearchBar({ value, onChangeText }: Props) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Rechercher..."
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 10,
    marginVertical: 10,
  },
});
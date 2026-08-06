import { StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
  count?: number;
}

export default function SectionTitle({
  title,
  count,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title.toUpperCase()}
        {count !== undefined ? ` (${count})` : ""}
      </Text>

      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },

  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#7C8AA5",
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E7EB",
    marginLeft: 12,
  },
});
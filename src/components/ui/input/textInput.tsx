import {View, Text, StyleSheet} from 'react-native';
import {appColors} from '../../../utils/colors';

export interface InputsMdProps {
  testID?: string;
}

export function TextInputUrl(props: InputsMdProps) {
  return (
    <View style={styles.root} testID={props.testID}>
      <View style={styles.frame40} testID="1:1588"></View>
      <View style={styles.frame26665} testID="1:1589">
        <Text style={styles.fixText} testID="1:1590">
          {`URL`}
        </Text>
        <View style={styles.frame26664} testID="1:1591">
          <Text style={styles.fixText2} testID="1:1592">
            {`https://`}
          </Text>
          <View style={styles.separator} testID="1:1593" />
          <Text style={styles.fixText3} testID="1:1594">
            {`www.brandimic.com`}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    height: 56,
    paddingTop: 6,
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 6,
    alignItems: 'center',
    rowGap: 12,
    columnGap: 12,
    alignSelf: 'stretch',
    borderRadius: 10,
    backgroundColor: 'rgba(244, 242, 248, 0.501960813999176)',
  },
  frame40: {
    flexDirection: 'row',
    width: 52,
    height: 14,
    alignItems: 'center',
    rowGap: 8,
    columnGap: 8,
    left: 14,
    top: 16,
  },
  fixText: {
    color: appColors.primary,
    fontFamily: 'Inter',
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 13,
  },
  fixText2: {
    color: appColors.primary,
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  separator: {
    width: 1,
    height: 16,
    borderRadius: 99,
    backgroundColor: 'rgba(21, 72, 118, 0.20000000298023224)',
  },
  fixText3: {
    color: appColors.primary,
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  frame26665: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    rowGap: 4,
    columnGap: 4,
  },
  frame26664: {
    flexDirection: 'row',
    alignItems: 'center',
    rowGap: 6,
    columnGap: 6,
  },
});

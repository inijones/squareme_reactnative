import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '@/constants/theme';

type TabName = 'home' | 'payments' | 'more' | 'profile';

const icons: Record<TabName, { focused: any; unfocused: any }> = {
  home: {
    focused: require('../assets/images/home_fill.png'),
    unfocused: require('../assets/images/home_outline.png'),
  },
  payments: {
    focused: require('../assets/images/money_fill.png'),
    unfocused: require('../assets/images/money_outline.png'),
  },
  more: {
    focused: require('../assets/images/more_fill.png'),
    unfocused: require('../assets/images/more_outline.png'),
  },
  profile: {
    focused: require('../assets/images/profile_fill.png'),
    unfocused: require('../assets/images/profile_outline.png'),
  },
};

// Helper function to capitalize first letter for display
const capitalizeFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export default function CustomTabs({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        // Label logic - capitalize for display
        const defaultLabel = capitalizeFirst(route.name);
        const label =
          typeof options.tabBarLabel === 'function'
            ? options.tabBarLabel({
                focused: isFocused,
                color: isFocused ? colors.primary : colors.secondary,
                position: 'below-icon',
                children: defaultLabel,
              })
            : options.tabBarLabel ?? options.title ?? defaultLabel;

        // Use lowercase route name for icon lookup
        const routeName = route.name as TabName;
        const tabIcon = icons[routeName]?.[isFocused ? 'focused' : 'unfocused'];

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}
          >
            {tabIcon && (
              <Image 
                source={tabIcon} 
                style={styles.icon} 
                resizeMode="contain" 
              />
            )}
            <Text style={[styles.label, { color: isFocused ? colors.primary500 : colors.gray400 }]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
     marginBottom: 4,
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    fontFamily: 'ClashGrotesk-Light',
  },
});
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { colors } from '../components/ui';
import { StoreProvider } from '../lib/store';

const icon = (emoji: string) => () => <Text style={{ fontSize: 20 }}>{emoji}</Text>;

export default function RootLayout() {
  return (
    <StoreProvider>
      <StatusBar style="dark" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          headerStyle: { backgroundColor: colors.bg },
          headerShadowVisible: false,
        }}
      >
        <Tabs.Screen name="index" options={{ title: 'Overview', tabBarIcon: icon('💶') }} />
        <Tabs.Screen name="expenses" options={{ title: 'Expenses', tabBarIcon: icon('🧾') }} />
        <Tabs.Screen name="energy" options={{ title: 'Energy', tabBarIcon: icon('🔌') }} />
        <Tabs.Screen name="settings" options={{ title: 'Budget', tabBarIcon: icon('⚙️') }} />
        {/* Opened by links from the other apps: moneybudget://add?spend=… */}
        <Tabs.Screen name="add" options={{ href: null, title: 'Import' }} />
      </Tabs>
    </StoreProvider>
  );
}

import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EmptyState } from '../../components/EmptyState';
import { ScreenHeader } from '../../components/ScreenHeader';
import { SearchBar } from '../../components/SearchBar';
import { useChat } from '../../context/ChatContext';
import type { MainTabScreenProps } from '../../navigation/types';
import { colors } from '../../theme';
import { ContactItem } from './components/ContactItem';

function Separator() {
  return <View style={styles.separator} />;
}

export function ContactsScreen({ navigation }: MainTabScreenProps<'Contacts'>) {
  const { users, openWith } = useChat();
  const [keyword, setKeyword] = useState('');

  const onlineCount = users.filter(u => u.isOnline).length;

  const rows = useMemo(() => {
    const query = keyword.trim().toLowerCase();
    return users
      .filter(u => query === '' || u.name.toLowerCase().includes(query))
      .sort((a, b) => {
        if (a.isOnline !== b.isOnline) {
          return a.isOnline ? -1 : 1;
        }
        return a.name.localeCompare(b.name, 'vi');
      });
  }, [users, keyword]);

  const handleOpen = (userId: string) => {
    const conversationId = openWith(userId);
    navigation.navigate('ChatDetail', { conversationId });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScreenHeader
        title="Danh bạ"
        subtitle={`${onlineCount} người đang hoạt động`}
      />
      <SearchBar
        value={keyword}
        onChangeText={setKeyword}
        placeholder="Tìm kiếm danh bạ"
      />
      <FlatList
        data={rows}
        keyExtractor={u => u.id}
        renderItem={({ item }) => (
          <ContactItem user={item} onPress={() => handleOpen(item.id)} />
        )}
        ItemSeparatorComponent={Separator}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={
          <EmptyState
            icon="users"
            title="Không tìm thấy"
            message="Không có người dùng nào khớp với từ khoá."
          />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
    marginLeft: 80,
  },
});

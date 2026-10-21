import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar } from '../../components/Avatar';
import { EmptyState } from '../../components/EmptyState';
import { ScreenHeader } from '../../components/ScreenHeader';
import { SearchBar } from '../../components/SearchBar';
import { useAuth } from '../../context/AuthContext';
import { useChat } from '../../context/ChatContext';
import type { MainTabScreenProps } from '../../navigation/types';
import { colors, spacing } from '../../theme';
import type { Conversation, Message, User } from '../../types/models';
import { ConversationItem } from './components/ConversationItem';

type ConversationRow = {
  conversation: Conversation;
  user: User;
  lastMessage: Message;
};

function Separator() {
  return <View style={styles.separator} />;
}

export function HomeScreen({ navigation }: MainTabScreenProps<'Chats'>) {
  const { conversations, messages, totalUnread, getUser } = useChat();
  const { user } = useAuth();
  const [keyword, setKeyword] = useState('');

  const rows = useMemo(() => {
    const needle = keyword.trim().toLowerCase();
    return conversations
      .map(conversation => ({
        conversation,
        user: getUser(conversation.participantId),
        lastMessage: messages[conversation.id]?.at(-1),
      }))
      .filter((row): row is ConversationRow =>
        Boolean(row.user && row.lastMessage),
      )
      .sort((a, b) =>
        b.lastMessage.createdAt.localeCompare(a.lastMessage.createdAt),
      )
      .filter(
        row =>
          !needle ||
          row.user.name.toLowerCase().includes(needle) ||
          row.lastMessage.text.toLowerCase().includes(needle),
      );
  }, [conversations, messages, getUser, keyword]);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader
        title="Tin nhắn"
        subtitle={
          totalUnread > 0
            ? `${totalUnread} tin nhắn chưa đọc`
            : 'Bạn đã đọc hết tin nhắn'
        }
        right={
          user ? (
            <Avatar source={user.avatar} size={40} online={user.isOnline} />
          ) : null
        }
      />
      <SearchBar
        value={keyword}
        onChangeText={setKeyword}
        placeholder="Tìm kiếm cuộc trò chuyện"
      />
      <FlatList
        data={rows}
        keyExtractor={row => row.conversation.id}
        keyboardShouldPersistTaps="handled"
        ItemSeparatorComponent={Separator}
        contentContainerStyle={styles.listContent}
        renderItem={({ item: row }) => (
          <ConversationItem
            user={row.user}
            lastMessage={row.lastMessage}
            unread={row.conversation.unread}
            isMine={row.lastMessage.senderId === user?.id}
            onPress={() =>
              navigation.navigate('ChatDetail', {
                conversationId: row.conversation.id,
              })
            }
          />
        )}
        ListEmptyComponent={
          <EmptyState
            icon="search"
            title="Không tìm thấy"
            message="Không có cuộc trò chuyện nào khớp với từ khoá."
          />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
    marginLeft: 84,
  },
  listContent: {
    paddingBottom: spacing.lg,
  },
});

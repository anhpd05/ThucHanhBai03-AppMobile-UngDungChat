import { useEffect, useMemo } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EmptyState } from '../../components/EmptyState';
import { useAuth } from '../../context/AuthContext';
import { useChat } from '../../context/ChatContext';
import type { RootStackScreenProps } from '../../navigation/types';
import { colors, spacing, typography } from '../../theme';
import { ChatHeader } from './components/ChatHeader';
import { MessageBubble } from './components/MessageBubble';
import { MessageInput } from './components/MessageInput';

export function ChatDetailScreen({
  route,
  navigation,
}: RootStackScreenProps<'ChatDetail'>) {
  const { conversationId } = route.params;
  const { conversations, messages, getUser, markRead, sendMessage } = useChat();
  const { user } = useAuth();

  const conversation = conversations.find(c => c.id === conversationId);
  const participant = conversation
    ? getUser(conversation.participantId)
    : undefined;

  useEffect(() => {
    markRead(conversationId);
  }, [conversationId, markRead]);

  const data = useMemo(
    () => [...(messages[conversationId] ?? [])].reverse(),
    [messages, conversationId],
  );

  if (!participant) {
    return (
      <SafeAreaView style={styles.safe}>
        <EmptyState
          icon="info"
          title="Không tìm thấy cuộc trò chuyện"
          message="Cuộc trò chuyện này không tồn tại."
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>Quay lại</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <ChatHeader user={participant} onBack={() => navigation.goBack()} />
      <KeyboardAvoidingView style={styles.flex} behavior="padding">
        {data.length === 0 ? (
          <View style={styles.empty}>
            <EmptyState
              icon="chat"
              title="Chưa có tin nhắn"
              message={`Hãy gửi lời chào tới ${participant.name}`}
            />
          </View>
        ) : (
          <FlatList
            inverted
            data={data}
            keyExtractor={m => m.id}
            contentContainerStyle={styles.listContent}
            keyboardShouldPersistTaps="handled"
            renderItem={({ item }) => (
              <MessageBubble
                message={item}
                isMine={item.senderId === user?.id}
              />
            )}
          />
        )}
        <MessageInput onSend={text => sendMessage(conversationId, text)} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  flex: {
    flex: 1,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
  },
  listContent: {
    padding: spacing.lg,
    gap: spacing.sm,
  },
  back: {
    ...typography.name,
    color: colors.primary,
    textAlign: 'center',
  },
});

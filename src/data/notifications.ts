import type { AppNotification } from '../types/models';
import { minutesAgo } from '../utils/formatTime';

export const initialNotifications: AppNotification[] = [
  {
    id: 'n1',
    type: 'message',
    content: 'Trần Thu Hà đã gửi cho bạn 2 tin nhắn mới.',
    createdAt: minutesAgo(2),
    read: false,
  },
  {
    id: 'n2',
    type: 'friend',
    content: 'Đặng Phương Thảo đã chấp nhận lời mời kết bạn.',
    createdAt: minutesAgo(20),
    read: false,
  },
  {
    id: 'n3',
    type: 'system',
    content: 'Mật khẩu của bạn đã được thay đổi thành công.',
    createdAt: minutesAgo(60),
    read: false,
  },
  {
    id: 'n4',
    type: 'message',
    content: 'Vũ Thảo My đã gửi cho bạn 3 tin nhắn mới.',
    createdAt: minutesAgo(3000),
    read: false,
  },
  {
    id: 'n5',
    type: 'friend',
    content: 'Bùi Đức Long muốn kết bạn với bạn.',
    createdAt: minutesAgo(1440),
    read: true,
  },
  {
    id: 'n6',
    type: 'system',
    content: 'Ứng dụng đã được cập nhật lên phiên bản 1.1.',
    createdAt: minutesAgo(2880),
    read: true,
  },
  {
    id: 'n7',
    type: 'message',
    content: 'Lê Hoàng Nam đã nhắc đến bạn trong nhóm Lập trình di động.',
    createdAt: minutesAgo(4320),
    read: true,
  },
  {
    id: 'n8',
    type: 'system',
    content: 'Chào mừng bạn đến với ChatApp!',
    createdAt: minutesAgo(10080),
    read: true,
  },
];

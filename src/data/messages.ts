import type { Message } from '../types/models';
import { minutesAgo } from '../utils/formatTime';

function message(
  conversationId: string,
  index: number,
  senderId: string,
  text: string,
  minutes: number,
): Message {
  return {
    id: `${conversationId}-${index}`,
    conversationId,
    senderId,
    text,
    createdAt: minutesAgo(minutes),
  };
}

export const initialMessages: Record<string, Message[]> = {
  c1: [
    message('c1', 1, 'u1', 'Chào Anh, chiều nay nhóm họp lúc mấy giờ nhỉ?', 30),
    message('c1', 2, 'me', 'Khoảng 3 giờ chiều nhé, ở thư viện tầng 2.', 28),
    message('c1', 3, 'u1', 'Ok, mình mang laptop theo.', 3),
    message('c1', 4, 'u1', 'Nhớ mang theo bản báo cáo nữa nha!', 2),
  ],
  c2: [
    message('c2', 1, 'u2', 'Bài thực hành React Native hôm nay khó không?', 40),
    message('c2', 2, 'me', 'Cũng ổn, phần navigation hơi nhiều.', 30),
    message('c2', 3, 'u2', 'Gửi mình tham khảo cấu trúc thư mục với.', 27),
    message('c2', 4, 'me', 'Ok, tối mình gửi nhé.', 25),
  ],
  c3: [
    message('c3', 1, 'me', 'Linh ơi, mai có lịch học bù không?', 120),
    message('c3', 2, 'u3', 'Có nha, 7 giờ sáng phòng B204.', 90),
  ],
  c4: [
    message('c4', 1, 'u4', 'Tối nay đá bóng không?', 1520),
    message('c4', 2, 'me', 'Đi chứ, 8 giờ sân cũ nhé.', 1500),
  ],
  c5: [
    message('c5', 1, 'me', 'Cảm ơn My đã chia sẻ tài liệu.', 3100),
    message('c5', 2, 'u5', 'Không có gì đâu.', 3060),
    message('c5', 3, 'u5', 'Có chỗ nào chưa hiểu cứ hỏi mình.', 3030),
    message('c5', 4, 'u5', 'Cuối tuần mình ôn chung nhé?', 3000),
  ],
  c6: [
    message('c6', 1, 'u7', 'Bạn đã nộp bài tập lớn chưa?', 5100),
    message('c6', 2, 'me', 'Mình nộp rồi, còn bạn?', 5000),
  ],
  c7: [
    message('c7', 1, 'u9', 'Chúc mừng sinh nhật nhé!', 12100),
    message('c7', 2, 'me', 'Cảm ơn Thảo nhiều nha!', 12000),
  ],
};

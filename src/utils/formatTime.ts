const WEEKDAYS = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'] as const;
const MINUTE = 60000;
const DAY = 86400000;

function pad(value: number): string {
  return String(value).padStart(2, '0');
}

function startOfDay(date: Date): number {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  ).getTime();
}

export function minutesAgo(minutes: number): string {
  return new Date(Date.now() - minutes * MINUTE).toISOString();
}

export function formatClock(iso: string): string {
  const date = new Date(iso);
  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export function formatTime(iso: string, now: Date = new Date()): string {
  const date = new Date(iso);
  const days = Math.round((startOfDay(now) - startOfDay(date)) / DAY);
  if (days <= 0) {
    return formatClock(iso);
  }
  if (days === 1) {
    return 'Hôm qua';
  }
  if (days < 7) {
    return WEEKDAYS[date.getDay()];
  }
  return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}`;
}

export function formatLastSeen(iso: string, now: Date = new Date()): string {
  const minutes = Math.max(
    0,
    Math.floor((now.getTime() - new Date(iso).getTime()) / MINUTE),
  );
  if (minutes < 1) {
    return 'Vừa mới hoạt động';
  }
  if (minutes < 60) {
    return `Hoạt động ${minutes} phút trước`;
  }
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `Hoạt động ${hours} giờ trước`;
  }
  return `Hoạt động ${Math.floor(hours / 24)} ngày trước`;
}

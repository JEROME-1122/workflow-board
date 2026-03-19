type Props = {
  dateString: string;
};
export function getRelativeTime({ dateString }: Props) {
  if (!dateString) return "just now";
  const now = new Date();
  const past = new Date(dateString);

  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  const minutes = Math.floor(diffInSeconds / 60);
  const hours = Math.floor(diffInSeconds / 3600);
  const days = Math.floor(diffInSeconds / 86400);

  if (diffInSeconds < 60) {
    return "just now";
  } else if (minutes < 60) {
    return `${minutes} min ago`;
  } else if (hours < 24) {
    return `${hours} hr ago`;
  } else {
    return `${days} day(s) ago`;
  }
}

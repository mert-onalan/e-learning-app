import { parse, format } from 'date-fns';

export const formatDate = (date: string): string => {
  if (!date) return '';
  
  try {
    const dateStr = date.split(' (')[0].trim();
    const parsedDate = parse(dateStr, 'dd.MM.yyyy HH:mm', new Date());
    return format(parsedDate, 'd MMM yyyy HH:mm');
  } catch (error) {
    console.error('Date formatting error:', error);
    return date;
  }
};
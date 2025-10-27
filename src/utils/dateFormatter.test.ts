import { describe, it, expect } from 'vitest';
import { formatDate } from './dateFormatter';

describe('formatDate', () => {
  it('formats valid date string correctly', () => {
    const result = formatDate('25.10.2024 14:30');
    expect(result).toBe('25 Oct 2024 14:30');
  });

  it('handles date with timezone info', () => {
    const result = formatDate('15.03.2024 09:00 (GMT+3)');
    expect(result).toBe('15 Mar 2024 09:00');
  });

  it('returns empty string for empty input', () => {
    const result = formatDate('');
    expect(result).toBe('');
  });

  it('returns original string if parsing fails', () => {
    const invalidDate = 'not a valid date';
    const result = formatDate(invalidDate);
    expect(result).toBe(invalidDate);
  });

  it('handles single digit days and months', () => {
    const result = formatDate('05.01.2024 08:15');
    expect(result).toBe('5 Jan 2024 08:15');
  });
});
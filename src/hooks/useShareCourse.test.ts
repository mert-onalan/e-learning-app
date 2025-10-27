import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import toast from 'react-hot-toast';
import { useShareCourse } from './useShareCourse';

vi.mock('react-hot-toast');

describe('useShareCourse', () => {
    const mockProps = {
        courseId: 'course-123',
        courseName: 'Introduction to React Testing',
    };

    const originalLocation = window.location;

    beforeEach(() => {
        vi.clearAllMocks();
        Object.assign(navigator, {
            clipboard: {
                writeText: vi.fn(),
            },
        });
        Object.defineProperty(window, 'location', {
            value: { href: '', origin: 'https://example.com' },
            writable: true,
        });
    });

    afterEach(() => {
        vi.restoreAllMocks();
        Object.defineProperty(window, 'location', {
            value: originalLocation,
            writable: true,
        });
    });

    it('copies course URL to clipboard successfully', async () => {
        const { result } = renderHook(() => useShareCourse(mockProps));
        navigator.clipboard.writeText = vi.fn().mockResolvedValue(undefined);

        const success = await result.current.copyToClipboard();

        expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
            'https://example.com/component/course-123'
        );
        expect(toast.success).toHaveBeenCalledWith('Link copied to clipboard!', expect.any(Object));
        expect(success).toBe(true);
    });

    it('handles clipboard copy failure', async () => {
        const { result } = renderHook(() => useShareCourse(mockProps));
        const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
        navigator.clipboard.writeText = vi.fn().mockRejectedValue(new Error('Permission denied'));

        const success = await result.current.copyToClipboard();

        expect(toast.error).toHaveBeenCalledWith('Failed to copy link', expect.any(Object));
        expect(consoleErrorSpy).toHaveBeenCalled();
        expect(success).toBe(false);
    });

    it('generates correct mailto link for email sharing', () => {
        const { result } = renderHook(() => useShareCourse(mockProps));

        result.current.shareViaEmail();

        expect(window.location.href).toContain('mailto:?subject=');
        expect(window.location.href).toContain(encodeURIComponent('Check out this course: Introduction to React Testing'));
        expect(window.location.href).toContain(encodeURIComponent('https://example.com/component/course-123'));
    });

    it('constructs URL with correct course ID', async () => {
        const customProps = {
            courseId: 'advanced-ts-101',
            courseName: 'Advanced TypeScript',
        };
        const { result } = renderHook(() => useShareCourse(customProps));
        navigator.clipboard.writeText = vi.fn().mockResolvedValue(undefined);

        await result.current.copyToClipboard();

        expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
            'https://example.com/component/advanced-ts-101'
        );
    });
});
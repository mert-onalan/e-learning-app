import toast from 'react-hot-toast';

interface IUseShareCourseProps {
  courseId: string;
  courseName: string;
}

export const useShareCourse = (props: IUseShareCourseProps) => {
  const getCourseUrl = () => {
    return `${window.location.origin}/component/${props.courseId}`;
  };

  const copyToClipboard = async () => {
    try {
      const url = getCourseUrl();
      await navigator.clipboard.writeText(url);
      toast.success('Link copied to clipboard!', {
        duration: 2000,
        position: 'bottom-center',
        style: {
          background: '#10b981',
          color: '#fff',
          fontWeight: '500',
        },
      });
      return true;
    } catch (error) {
      console.error('Failed to copy:', error);
      toast.error('Failed to copy link', {
        duration: 3000,
        position: 'bottom-center',
      });
      return false;
    }
  };

  const shareViaEmail = () => {
    const url = getCourseUrl();
    const subject = encodeURIComponent(`Check out this course: ${props.courseName}`);
    const body = encodeURIComponent(
      `I thought you might be interested in this course:\n\n${props.courseName}\n\n${url}`
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return {
    copyToClipboard,
    shareViaEmail,
  };
};
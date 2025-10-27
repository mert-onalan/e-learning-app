import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  it('shows the correct progress percentage', () => {
    render(<ProgressBar progress={45} />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '45');
  });

  it('handles 0% progress', () => {
    render(<ProgressBar progress={0} />);
    
    const fill = document.querySelector('.progress-bar-fill') as HTMLElement;
    expect(fill).toHaveStyle({ width: '0%' });
  });

  it('handles 100% progress', () => {
    render(<ProgressBar progress={100} />);
    
    const fill = document.querySelector('.progress-bar-fill') as HTMLElement;
    expect(fill).toHaveStyle({ width: '100%' });
  });

  it('caps progress at 100 when given higher values', () => {
    render(<ProgressBar progress={150} />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '100');
  });

  it('prevents negative progress values', () => {
    render(<ProgressBar progress={-20} />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '0');
  });
});
import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useSearch } from './useSearch';
import type { IComponentItem } from '../types/types';

const mockData: IComponentItem[] = [
  {
    id: 1,
    name: 'React Fundamentals',
    subtitle: 'Learn React basics',
    type: 'COURSE',
    image: '/react.jpg',
    progress: 50,
  },
  {
    id: 2,
    name: 'Advanced TypeScript',
    subtitle: 'Master TypeScript',
    type: 'COURSE',
    image: '/ts.jpg',
    progress: 75,
  },
  {
    id: 3,
    name: 'JavaScript Essentials',
    subtitle: 'JS fundamentals',
    type: 'COURSE',
    image: '/js.jpg',
    progress: 30,
  },
];

describe('useSearch', () => {
  it('returns all data initially', () => {
    const { result } = renderHook(() => useSearch({ data: mockData }));
    
    expect(result.current.filteredData).toHaveLength(3);
    expect(result.current.resultCount).toBe(3);
    expect(result.current.isFiltered).toBe(false);
  });

  it('filters data based on search term', () => {
    const { result } = renderHook(() => useSearch({ data: mockData }));
    
    act(() => {
      result.current.setSearchTerm('React');
      result.current.handleSearch('React');
    });
    
    expect(result.current.filteredData).toHaveLength(1);
    expect(result.current.filteredData[0].name).toBe('React Fundamentals');
  });

  it('performs case-insensitive search', () => {
    const { result } = renderHook(() => useSearch({ data: mockData }));
    
    act(() => {
      result.current.handleSearch('typescript');
    });
    
    expect(result.current.filteredData).toHaveLength(1);
    expect(result.current.filteredData[0].name).toBe('Advanced TypeScript');
  });

  it('clears search and returns all data', () => {
    const { result } = renderHook(() => useSearch({ data: mockData }));
    
    act(() => {
      result.current.setSearchTerm('React');
      result.current.handleSearch('React');
    });
    
    expect(result.current.filteredData).toHaveLength(1);
    
    act(() => {
      result.current.handleClear();
    });
    
    expect(result.current.searchTerm).toBe('');
    expect(result.current.filteredData).toHaveLength(3);
    expect(result.current.isFiltered).toBe(false);
  });

  it('handles empty search term', () => {
    const { result } = renderHook(() => useSearch({ data: mockData }));
    
    act(() => {
      result.current.handleSearch('   ');
    });
    
    expect(result.current.filteredData).toHaveLength(3);
  });
});
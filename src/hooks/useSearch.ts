import { useState, useMemo } from "react";
import type { IComponentItem } from "../types/types";

interface IUseSearchOptions {
  data: IComponentItem[];
}

interface UseSearchReturn {
  searchTerm: string;
  filteredData: IComponentItem[];
  resultCount: number;
  isFiltered: boolean;
  setSearchTerm: (term: string) => void;
  handleSearch: (term: string) => void;
  handleClear: () => void;
}

export const useSearch = (props: IUseSearchOptions): UseSearchReturn => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSearchTerm, setActiveSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    if (!activeSearchTerm.trim()) {
      return props.data;
    }

    const normalizedSearch = activeSearchTerm.toLowerCase().trim();

    return props.data.filter((item) => {
      return item.name.toLowerCase().includes(normalizedSearch);
    });
  }, [props.data, activeSearchTerm]);

  const handleSearch = (term: string) => {
    setActiveSearchTerm(term);
  };

  const handleClear = () => {
    setSearchTerm("");
    setActiveSearchTerm("");
  };

  const isFiltered = activeSearchTerm.trim() !== "";

  return {
    searchTerm,
    setSearchTerm,
    filteredData,
    resultCount: filteredData.length,
    handleSearch,
    handleClear,
    isFiltered,
  };
};
import { default as React } from '../../node_modules/.pnpm/react@19.2.7/node_modules/react';
export type Theme = 'light' | 'dark';
export interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}
export interface ThemeProviderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    defaultTheme?: Theme;
    as?: React.ElementType;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export declare const useTheme: () => ThemeContextType;

# Steps

### npm initialization
`npm init -y`

### Dependency installation
`npm install -D react @types/react typescript`

### Add peerdependecy
Move the react from devDependency to peerDependency
```
"peerDependencies": {
    "react": "^19.2.6"
}
```

### Install prettier
`npm install -D prettier`

Create `.prettierrc` and set the rules
```
{
    "printWidth": 80,
    "tabWidth": 2
}
```

### ESLint
`npm install -D eslint @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-storybook @typescript-eslint/eslint-plugin`

Create `.eslintrc` and add the configuration
```
{
  // Specify the environments where the code will run
  "env": {
    "jest": true,       // Enable Jest for testing
    "browser": true     // Enable browser environment
  },

  // Stop ESLint from searching for configuration in parent folders
  "root": true,

  // Specify the parser for TypeScript (using @typescript-eslint/parser)
  "parser": "@typescript-eslint/parser", // Leverages TS ESTree to lint TypeScript

  // Add additional rules and configuration options
  "plugins": ["@typescript-eslint"],

  // Extend various ESLint configurations and plugins
  "extends": [
    "eslint:recommended",                   // ESLint recommended rules
    "plugin:react/recommended",             // React recommended rules
    "plugin:@typescript-eslint/recommended", // TypeScript recommended rules
    "plugin:@typescript-eslint/eslint-recommended", // ESLint overrides for TypeScript
    "prettier",                             // Prettier rules
    "plugin:prettier/recommended",          // Prettier plugin integration
    "plugin:react-hooks/recommended",       // Recommended rules for React hooks
    "plugin:storybook/recommended"          // Recommended rules for Storybook
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
  }
}
```

### TypeScript Configuration
Create `tsconfig.json`
```
{
  "compilerOptions": {
    "target": "ES5", // Specifies the JavaScript version to target when transpiling code.
    "useDefineForClassFields": true, // Enables the use of 'define' for class fields.
    "lib": ["ES2020", "DOM", "DOM.Iterable"], // Specifies the libraries available for the code.
    "module": "ESNext", // Defines the module system to use for code generation.
    "skipLibCheck": true, // Skips type checking of declaration files.

    /* Bundler mode */
    "moduleResolution": "bundler", // Specifies how modules are resolved when bundling.
    "allowImportingTsExtensions": true, // Allows importing TypeScript files with extensions.
    "resolveJsonModule": true, // Enables importing JSON modules.
    "isolatedModules": true, // Ensures each file is treated as a separate module.
    "noEmit": true, // Prevents TypeScript from emitting output files.
    "jsx": "react-jsx", // Configures JSX support for React.

    /* Linting */
    "strict": true, // Enables strict type checking.
    "noUnusedLocals": true, // Flags unused local variables.
    "noUnusedParameters": true, // Flags unused function parameters.
    "noFallthroughCasesInSwitch": true, // Requires handling all cases in a switch statement.
    "declaration": true, // Generates declaration files for TypeScript.
  },
  "include": ["src"], // Specifies the directory to include when searching for TypeScript files.
  "exclude": [
    "src/**/__docs__","src/**/__test__"
  ]
}
```

### Vite Configuration
# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## Folder Structure
```
app/
├── (tabs)/                         # Tab entry points for navigation
│   ├── home.tsx
│   ├── profile.tsx
│   └── payment.tsx

├── auth/                           # Authentication feature
│   ├── api.ts                      # API calls (login, register, etc.)
│   ├── hooks.ts                    # Auth-related custom hooks
│   ├── store.ts                    # Zustand store for auth state
│   └── types.ts                    # Types: User, AuthToken, etc.

├── home/                           # Home tab feature
│   ├── screens/
│   │   ├── NotificationScreen.tsx  # Home notification view
│   │   └── TransactionScreen.tsx   # List of recent transactions
│   ├── components/
│   │   └── TransactionItem.tsx     # UI component for a transaction
│   ├── hooks.ts                    # Custom hooks for home logic
│   ├── store.ts                    # Zustand store for local state (optional)
│   └── types.ts                    # Feature-specific types

├── profile/                        # Profile tab feature
│   ├── screens/
│   │   ├── NotificationScreen.tsx
│   │   ├── BadgesScreen.tsx
│   │   └── RewardsScreen.tsx
│   ├── components/
│   │   └── BadgeCard.tsx
│   └── types.ts

├── payment/                        # Payment flow
│   ├── screens/
│   │   ├── SendMoneyScreen.tsx
│   │   ├── ConfirmTransactionScreen.tsx
│   │   ├── PinScreen.tsx
│   │   └── SuccessScreen.tsx
│   ├── components/
│   │   └── AmountInput.tsx
│   ├── store.ts                    # Zustand store (amount, PIN, etc.)
│   ├── hooks.ts
│   └── types.ts

├── shared/                         # Shared resources and utilities
│   ├── components/
│   │   ├── Button.tsx              # Reusable button component
│   │   └── Modal.tsx               # Generic modal
│   ├── navigation.ts               # Navigation helpers
│   ├── constants.ts                # App-wide constants (e.g., colors, routes)
│   └── utils/
│       ├── result.ts               # Dartz-style result handling (success/failure)
│       └── formatters.ts           # Format helpers (currency, date, etc.)
```
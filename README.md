# 💶 Money & Budget

Track what you spend, set a **monthly budget plus limits per category**, and get plain-language insights like *"You've spent €12 more than usual by this point in the month"*. It also works out **what your heater costs to run**, and when you finish a month under budget it suggests a reward: *"Treat yourself to a new book!"*

Shopping trips and scanned receipts from [Smart Shopping List](https://github.com/kgiannopoulou/smart-shopping-list) and [Kitchen Inventory](https://github.com/kgiannopoulou/kitchen-inventory) can come in with one link.

> Part 5 of **Personal Home Helper**, a set of small apps that will later connect into one AI life assistant. See also [food-water-tracker](https://github.com/kgiannopoulou/food-water-tracker), [activity-coach](https://github.com/kgiannopoulou/activity-coach), [kitchen-inventory](https://github.com/kgiannopoulou/kitchen-inventory), [smart-shopping-list](https://github.com/kgiannopoulou/smart-shopping-list) and [home-chores](https://github.com/kgiannopoulou/home-chores).

## Features

| | |
|---|---|
| ✍️ **Quick add** | Type `12.50 lunch`, `Lidl 23,40` or `€30 petrol`. The amount and category are worked out for you (`2 coffees 7.50` → €7.50, not €2) |
| 🎯 **Budgets** | One monthly budget for everything, a weekly groceries & household budget, and optional limits per category |
| 📈 **Insights** | Compared with the same day in your previous months, a projection to month end (bills counted once), and *"you can spend €18/day for the rest of the month"* |
| 🔁 **Monthly bills** | Rent, phone, Netflix… are added automatically on their day each month |
| 🎁 **Rewards** | Keep a wishlist. After a month under budget, the app suggests the best treat your savings can buy |
| 🔌 **Heating & energy** | Running cost per day/month for heaters, AC, humidifiers and dryers, plus *"one hour less a day saves €15 a month"* |
| 📊 **History** | 6-month chart against your budget, and an expense list you can browse month by month |
| 🔗 **App link** | `moneybudget://add?spend=23.40&store=Lidl&date=2026-10-01` logs a shopping trip (same params as Smart Shopping List's link) |

Categories: 🥦 Groceries · 🧽 Household · 🍽️ Eating out · 🚌 Transport · 🧾 Bills · 💊 Health · 🎉 Fun · 🛍️ Shopping · 📦 Other

All data stays on your device.

## Tech

- [Expo](https://expo.dev) SDK 57 · React Native · TypeScript · Expo Router (deep link route `src/app/add.tsx`)
- AsyncStorage
- Jest (`jest-expo`) unit tests

```
src/
  app/          # screens: Overview, Expenses, Energy, Budget, + add (deep-link import)
  lib/
    budget.ts     # parsing, month summaries, insights, rewards, recurring bills, energy costs
    homeCore.ts   # shared Personal Home Helper foundation (same file in every app)
    links.ts      # moneybudget:// import link
    store.tsx     # app state + persistence
```

## Run it

```bash
npm install
npx expo start        # scan the QR code with Expo Go, or press w for web
npm test
npm run typecheck
```

Try the import on web: `http://localhost:8081/add?spend=23.40&store=Lidl`

## Roadmap

- [ ] Send trips here automatically from Smart Shopping List's "Finish shopping"
- [ ] Cheapest high-protein foods this month (with Food & Water Tracker + receipt items)
- [ ] Real heating cost from a smart plug or thermostat (Home Assistant)
- [ ] Shared household budget

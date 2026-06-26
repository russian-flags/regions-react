# Vite React example

Минимальный пример подключения `@russian-flags/regions-react` в React-приложении.

Перед запуском примера соберите пакет из корня репозитория:

```bash
npm install
npm run build
cd examples/vite-react
npm install
npm run dev
```

В примере показаны:

- ленивый компонент `RegionFlag`;
- список регионов из `@russian-flags/regions-react/meta`;
- inline-вставка SVG напрямую из базового `@russian-flags/regions/svg/ta.svg?raw`.

Прямой импорт React-компонента отдельного флага показан в основном README пакета.

`vite.config.ts` специально фиксирует `react` и `react-dom` на зависимости
самого примера и исключает `@russian-flags/regions-react` из Vite pre-bundling.
Это нужно для локального `file:../..` подключения пакета из этого же
репозитория: так в dev-режиме не появляются две копии React, а SVG-ассеты
остаются привязаны к реальным файлам пакета.

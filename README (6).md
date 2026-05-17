# Blazor Demo — 4 концепції

## Що реалізовано

| # | Концепція | Де |
|---|---|---|
| 1 | **Two-way binding** | `@bind` + `@bind:event="oninput"` у формі профілю |
| 2 | **Cascading Value** | `AppTheme` передається з `MainLayout` → `ProfileCard` через `[CascadingParameter]` |
| 3 | **Виклик JS з C#** | `IJSRuntime.InvokeAsync` — alert, confirm, scroll, window size, clipboard |
| 4 | **Виклик C# з JS** | `DotNetObjectReference` + `invokeMethodAsync` — таймер та відкладений виклик |

## Запуск

```bash
dotnet run
```

Відкрий браузер: **http://localhost:5000**

## Структура

```
BlazorDemo/
├── Models/
│   ├── AppTheme.cs        — модель теми (cascading value)
│   └── UserProfile.cs     — модель профілю (two-way binding)
├── Pages/
│   └── Index.razor        — головна сторінка з усіма демо
├── Shared/
│   ├── MainLayout.razor   — надає CascadingValue<AppTheme>
│   └── ProfileCard.razor  — отримує тему через [CascadingParameter]
├── wwwroot/
│   ├── js/interop.js      — JS функції для interop
│   ├── css/app.css
│   └── index.html
├── App.razor
├── Program.cs
└── BlazorDemo.csproj
```

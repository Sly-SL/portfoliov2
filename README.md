⸻

# Portfolio

English Version

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Folder Structure](#folder-structure)
- [API & Database](#api--database)
- [Components Overview](#components-overview)
- [Screenshots](#screenshots)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Wersja Polska](#wersja-polska)

⸻

## Project Overview

Portfolio2 is a modern, responsive, and highly interactive personal portfolio web application built with Next.js 16 and TypeScript. The project demonstrates advanced usage of React Server Components, Firebase integration, and Turbopack bundling for ultra-fast development and runtime performance.

The portfolio includes:
•	Interactive contact forms with Firebase backend.
•	Dynamic project listing and comments system.
•	Custom reusable components for headers, social links, and page subdivisions.
•	SEO optimized and responsive design.

⸻

## Features
•	Fully responsive design for desktop, tablet, and mobile.
•	Server-side rendered pages for performance and SEO.
•	Firebase integration for storing and fetching comments.
•	Custom animations and interactive UI elements.
•	Modular component structure to ensure scalability.
•	Multi-language support (English & Polish).

⸻

## Technologies Used
•	Next.js 16.2.2 (Turbopack)
•	React 18+
•	TypeScript
•	Firebase (Firestore, Realtime Database)
•	CSS Modules / SCSS
•	Framer Motion for animations
•	Vercel deployment-ready

⸻

## Installation
1.	Clone the repository:

git clone https://github.com/Sly-SL/portfoliov2.git
cd portfolio2

2.	Install dependencies:

    npm install
# or
    yarn install

3.Create a .env file in the root directory:

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id


⸻

## Running the Project

To start the development server:

NEXT_TURBOPACK_CACHE=none next dev

	•	Local: http://localhost:3000
	•	Network: http://<your-local-ip>:3000

To build for production:

next build
next start


⸻

## Folder Structure

```
/portfolio2
├── src
│   ├── app                  # Next.js app directory
│   │   ├── contact          # Contact page with form and social links
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── shared
│   │   ├── components       # Reusable UI components
│   │   │   ├── custom
│   │   │   │   ├── pages
│   │   │   │   │   └── contact.custom.tsx
│   │   │   │   ├── header
│   │   │   │   │   ├── subdivs
│   │   │   │   │   │   └── about.subdiv.tsx
│   │   │   │   └── social-links.custom.tsx
│   │   └── lib
│   │       └── firebase    # Firebase queries and utils
├── public                  # Static assets
└── package.json
```


⸻

## API & Database
•	Firebase is used for comment storage and user interactions.
•	getCommentsQuery() fetches all comments dynamically.
•	Ensure .env variables are properly set to allow Firebase access.

⸻

## Components Overview
•	ContactCustom – Custom contact form with validation and Firebase integration.
•	SocialLinksCustom – Interactive social links component.
•	AboutSubdiv – Modular “About Me” subsection for the header component.
•	SubdivConstructor – Generic builder for page subdivisions.

⸻

## Screenshots

Add screenshots here to demonstrate your project layout, contact page, and animations.

⸻

## Troubleshooting
1.	Module Not Found / Export Errors:
•	Ensure the imported paths are correct and that the exported components exist.
•	Example: import { GoogleMaps } from "@/shared/components/..."; might need import GoogleMaps from ....
2.	Firebase errors:
•	Check that .env keys are valid and Firebase rules allow read/write.
3.	Next.js dev server issues:
•	Clear .next cache: rm -rf .next
•	Restart the server with NEXT_TURBOPACK_CACHE=none next dev.

⸻

## Contributing

 Contributions are welcome! Please follow these steps:
1.	Fork the repository.
2.	Create a feature branch: git checkout -b feature/my-feature.
3.	Commit your changes: git commit -m "Add new feature".
4.	Push to your branch: git push origin feature/my-feature.
5.	Open a pull request.

⸻

## License

This project is licensed under the MIT License. See the LICENSE file for details.

⸻

## Contact
•	Email: slyslcoder@icloud.com
•	GitHub: Sly-Sl￼

⸻

## Wersja Polska

## Spis treści

1. [Opis Projektu](#opis-projektu)
2. [Funkcje](#funkcje)
3. [Technologie](#technologie)
4. [Instalacja](#instalacja)
5. [Uruchomienie Projektu](#uruchomienie-projektu)
6. [Struktura Folderów](#struktura-folderów)
7. [API i Baza Danych](#api-i-baza-dannych)
8. [Przegląd Komponentów](#przegląd-komponentów)
9. [Zrzuty Ekranu](#zrzuty-ekranu)
10. [Rozwiązywanie Problemów](#rozwiązywanie-problemów)
11. [Współtworzenie](#współtworzenie)
12. [Licencja](#licencja)
13. [Kontakt](#kontakt)￼

⸻

## Opis Projektu

Portfolio2 to nowoczesna, responsywna i interaktywna strona portfolio zbudowana w Next.js 16 i TypeScript. Projekt pokazuje zaawansowane wykorzystanie React Server Components, integracji z Firebase oraz Turbopack dla maksymalnej wydajności i szybkości developmentu.

Portfolio zawiera:
•	Interaktywny formularz kontaktowy z backendem Firebase.
•	Dynamiczna lista projektów oraz system komentarzy.
•	Własne, wielokrotnego użytku komponenty dla nagłówków, linków społecznościowych i podstron.
•	SEO i responsywny design.

⸻

## Funkcje
•	Responsywny design (desktop, tablet, mobile).
•	Strony renderowane po stronie serwera (SSR) dla wydajności i SEO.
•	Integracja z Firebase do przechowywania komentarzy.
•	Animacje i interaktywne elementy UI.
•	Modułowa struktura komponentów dla skalowalności.
•	Wsparcie dla wielu języków (angielski & polski).

⸻

## Technologie
•	Next.js 16.2.2 (Turbopack)
•	React 18+
•	TypeScript
•	Firebase (Firestore, Realtime Database)
•	CSS Modules / SCSS
•	Framer Motion do animacji
•	Gotowe do deploymentu na Vercel

⸻

## Instalacja
1.	Sklonuj repozytorium:

git clone https://github.com/Sly-SL/portfoliov2.git
cd portfolio2

2.	Zainstaluj zależności:

    npm install
# lub
    yarn install

3.	Utwórz plik .env w katalogu głównym:

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id


⸻

## Uruchomienie Projektu

Aby uruchomić serwer developerski:

NEXT_TURBOPACK_CACHE=none next dev

	•	Lokalnie: http://localhost:3000
	•	Sieć: http://<twoje-lokalne-ip>:3000

Budowa produkcyjna:

next build
next start


⸻

## Struktura Folderów

```
/portfolio2
├── src
│   ├── app                  
│   │   ├── contact          
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── shared
│   │   ├── components       
│   │   │   ├── custom
│   │   │   │   ├── pages
│   │   │   │   │   └── contact.custom.tsx
│   │   │   │   ├── header
│   │   │   │   │   ├── subdivs
│   │   │   │   │   │   └── about.subdiv.tsx
│   │   │   │   └── social-links.custom.tsx
│   │   └── lib
│   │       └── firebase    
├── public                  
└── package.json
```

⸻

## API i Baza Danych
•	Firebase jest używany do przechowywania komentarzy i interakcji użytkownika.
•	getCommentsQuery() pobiera komentarze dynamicznie.
•	Upewnij się, że .env ma poprawne klucze do Firebase.

⸻

## Przegląd Komponentów
•	ContactCustom – formularz kontaktowy z walidacją i integracją Firebase.
•	SocialLinksCustom – interaktywne linki społecznościowe.
•	AboutSubdiv – modułowa sekcja “O mnie”.
•	SubdivConstructor – uniwersalny konstruktor podstron.

⸻

## Zrzuty Ekranu

Dodaj zrzuty ekranu pokazujące układ strony, formularz kontaktowy i animacje.

⸻

## Rozwiązywanie Problemów
1.	Błędy „Module Not Found” / Export:
•	Sprawdź poprawność ścieżek importów i czy komponenty są wyeksportowane.
•	Przykład: import { GoogleMaps } from "@/shared/components/..."; może wymagać import GoogleMaps from ....
2.	Błędy Firebase:
•	Sprawdź poprawność kluczy w .env i zasady odczytu/zapisu w Firebase.
3.	Problemy z serwerem Next.js:
•	Wyczyść cache .next: rm -rf .next
•	Uruchom ponownie serwer: NEXT_TURBOPACK_CACHE=none next dev.

⸻

## Współtworzenie
1.	Fork repozytorium.
2.	Stwórz branch: git checkout -b feature/my-feature.
3.	Dodaj zmiany: git commit -m "Add new feature".
4.	Wypchnij branch: git push origin feature/my-feature.
5.	Stwórz pull request.

⸻

## Licencja

Projekt objęty licencją MIT. Szczegóły w pliku LICENSE.

⸻

## Kontakt
•	Email: slyslcoder@icloud.com
•	GitHub: Sly-Sl￼

⸻
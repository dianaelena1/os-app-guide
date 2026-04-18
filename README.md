# Shell Scripting Guide

Un mic proiect Angular pentru laboratorul de shell scripting.

## 1. Ce trebuie instalat

Ai nevoie de:
- Node.js
- npm
- Angular CLI

Dacă Angular CLI nu este instalat, rulează:

```bash
npm install -g @angular/cli
```

## 2. Cum rulezi proiectul

Intră în folderul proiectului și rulează:

```bash
npm install
npm start
```

După aceea, deschide în browser:

```text
http://localhost:4200
```

## 3. Dacă portul este ocupat

Poți porni aplicația pe alt port astfel:

```bash
ng serve --port 4300
```

## 4. Build pentru producție

```bash
npm run build
```

Build-ul va fi generat în folderul:

```text
dist/shell-scripting-guide
```

# Calcolatore Porzioni - Cook Portions App

Un'applicazione Angular minimal per calcolare il peso delle porzioni cotte partendo dai pesi da crudo.

## Descrizione

Questa app ti permette di calcolare facilmente quanto peserà la tua porzione dopo la cottura, utilizzando una semplice proporzione matematica:

**Porzione cotta = (Porzione cruda × Peso totale cotto) / Peso totale crudo**

## Caratteristiche

- Design minimal e moderno con gradiente viola
- Interfaccia responsive (mobile-friendly)
- Calcolo automatico della proporzione
- Reset rapido del form
- Compatibile con Android tramite Capacitor

## Installazione

```bash
# Clona il repository
cd cook-portions-app

# Installa le dipendenze
npm install
```

## Sviluppo

### Eseguire in locale (browser)

```bash
npm start
# oppure
ng serve
```

Apri il browser su `http://localhost:4200/`

### Build per produzione

```bash
npm run build
```

## Android

### Prerequisiti per Android

- Android Studio installato
- Java JDK 17 o superiore
- Android SDK configurato

### Eseguire su Android

```bash
# 1. Build dell'app Angular
npm run build

# 2. Sincronizza con Capacitor
npx cap sync

# 3. Apri Android Studio
npx cap open android

# 4. Da Android Studio:
#    - Connetti il tuo dispositivo Android o avvia un emulatore
#    - Clicca su "Run" (▶) per installare l'app
```

### Build APK per Android

Dopo aver aperto il progetto in Android Studio:

1. **Build > Build Bundle(s) / APK(s) > Build APK(s)**
2. L'APK sarà generato in `android/app/build/outputs/apk/debug/`

## Come usare l'app

1. **Peso porzione da crudo**: Inserisci il peso della tua porzione prima della cottura (es. 100g)
2. **Peso totale da crudo**: Inserisci il peso totale del cibo prima della cottura (es. 500g)
3. **Peso totale da cotto**: Inserisci il peso totale del cibo dopo la cottura (es. 350g)
4. Clicca su **Calcola** per vedere il peso della tua porzione da cotto
5. Usa **Reset** per pulire il form

## Esempio pratico

Se hai cucinato 500g di pasta cruda che è diventata 1200g dopo la cottura, e vuoi sapere quanto pesa la tua porzione di 80g (cruda):

- Peso porzione da crudo: **80**
- Peso totale da crudo: **500**
- Peso totale da cotto: **1200**
- **Risultato**: 192g (la tua porzione da cotto)

## Tecnologie utilizzate

- **Angular 20.3.7** - Framework frontend
- **TypeScript** - Linguaggio di programmazione
- **Capacitor** - Per l'integrazione nativa Android
- **CSS3** - Stili minimal e gradienti

## Struttura del progetto

```
cook-portions-app/
├── src/
│   ├── app/
│   │   ├── app.ts          # Logica dell'applicazione
│   │   ├── app.html        # Template del form
│   │   └── app.css         # Stili dell'app
│   └── styles.css          # Stili globali
├── android/                # Progetto Android (Capacitor)
└── capacitor.config.ts     # Configurazione Capacitor
```

## License

Questo progetto è open source.

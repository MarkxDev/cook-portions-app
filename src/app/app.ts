import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Input fields
  porzioneRaw = signal<number | null>(null);
  pesoTotaleRaw = signal<number | null>(null);
  pesoTotaleCooked = signal<number | null>(null);

  // Result
  porzioneCotta = signal<number | null>(null);

  /**
   * Calcola la porzione da cotto usando la proporzione:
   * porzione_cotta = (porzione_cruda * peso_totale_cotto) / peso_totale_crudo
   */
  calcolaPorzione(): void {
    const porzione = this.porzioneRaw();
    const totaleRaw = this.pesoTotaleRaw();
    const totaleCooked = this.pesoTotaleCooked();

    // Verifica che tutti i valori siano validi e maggiori di 0
    if (
      porzione !== null &&
      totaleRaw !== null &&
      totaleCooked !== null &&
      porzione > 0 &&
      totaleRaw > 0 &&
      totaleCooked > 0
    ) {
      const risultato = (porzione * totaleCooked) / totaleRaw;
      this.porzioneCotta.set(Math.round(risultato * 100) / 100); // Arrotonda a 2 decimali
    } else {
      this.porzioneCotta.set(null);
    }
  }

  // Reset del form
  reset(): void {
    this.porzioneRaw.set(null);
    this.pesoTotaleRaw.set(null);
    this.pesoTotaleCooked.set(null);
    this.porzioneCotta.set(null);
  }
}

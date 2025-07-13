# Generator Sesizări

[![Website](https://img.shields.io/badge/Website-generator--sesizari.ro-blue)](https://generator-sesizari.ro)

Un generator web pentru crearea și descărcarea formularelor de sesizare pentru instituții publice din România.

## 📋 Descriere

Acest proiect oferă o interfață web modernă și accesibilă pentru generarea automată a formularelor de sesizare pentru diferite instituții publice românești. Utilizatorii pot completa formulare interactive și pot descărca direct documente PDF complete cu semnătura digitală inclusă.

### 🏛️ Instituții suportate

- **CNCD** - Consiliul Național pentru Combaterea Discriminării
- **CDEP** - Camera Deputaților (în dezvoltare)
- *Alte instituții vor fi adăugate pe viitor*

### 🌟 Caracteristici principale

- **Formulare interactive** cu validare în timp real
- **Semnătură digitală** desenată direct în browser
- **Generare PDF automată** cu template-uri oficiale
- **Link-uri permanente** pentru partajarea formularelor precompletate
- **Interfață accesibilă** cu suport pentru screen readers
- **Design responsive** pentru toate dispozitivele
- **Validare completă** a câmpurilor obligatorii
- **Integrare email** pentru trimiterea directă către instituții
- **Suport multi-instituții** cu template-uri specifice

## 🚀 Utilizare

### Pentru utilizatori finali

1. **Accesează aplicația**: Deschide [generator-sesizari.ro](https://generator-sesizari.ro)
2. **Selectează instituția**: Alege instituția pentru care vrei să depui sesizarea (în dezvoltare)
3. **Completează formularul**: Introdu toate datele necesare în câmpurile marcate
4. **Desenează semnătura**: Folosește mouse-ul sau degetul pentru a desena semnătura
5. **Generează PDF**: Apasă butonul "Descarcă sesizarea (PDF)"
6. **Trimite sesizarea**: Folosește link-urile de email pentru a trimite documentul

## 🛠️ Tehnologii utilizate

- **Frontend**: HTML5, CSS3 (Tailwind CSS), JavaScript (ES6+)
- **PDF Generation**: `html2pdf.js`
- **Markdown Processing**: `marked.js`
- **Signature Canvas**: HTML5 Canvas API
- **Deployment**: GitHub Pages
- **Domain**: Custom domain (`generator-sesizari.ro`)

## 🔧 Instalare și dezvoltare

### Cerințe

- Un browser web modern
- Server web local (opțional)

### Pași de instalare

1. **Clonează repository-ul**:
   ```bash
   git clone https://github.com/revolter/Generator-Sesizari.git
   cd Generator-Sesizari
   ```

2. **Deschide aplicația**:
   - Pentru dezvoltare locală: deschide `cncd/index.html` în browser
   - Sau folosește un server local (opțional):
     ```bash
     npx http-server docs/
     ```

3. **Accesează aplicația**:
   - Local: deschide direct `docs/cncd/index.html` în browser
   - Cu server local: `http://localhost:8080/cncd/`

### Workflow de dezvoltare

- **Branch principal**: `main` - pentru commit-uri și merge-uri
- **Deployment**: `gh-pages` - pentru publicarea pe GitHub Pages
- **Proces**: Merge manual pe `gh-pages` pentru deploy (se poate face și prin Pull Request)

## 📝 Template-uri

Aplicația folosește template-uri Markdown specifice fiecărei instituții.

## 🔒 Securitate și confidențialitate

- **Procesare locală**: Toate datele sunt procesate în browser
- **Fără stocare**: Nu se salvează informații pe server
- **Link-uri temporare**: Link-urile permanente conțin doar parametrii URL
- **Validare client-side**: Protecție împotriva datelor invalide

## ♿ Accesibilitate

Aplicația respectă standardele de accesibilitate WCAG 2.1:

- **Navigare cu tastatura** completă
- **Suport screen reader** cu ARIA labels
- **Contrast optimizat** pentru citire
- **Focus management** pentru utilizatori cu dizabilități
- **Anunțuri vocale** pentru erori și confirmări

## 🤝 Contribuții

Contribuțiile sunt binevenite! Iată cum poți contribui:

### Raportarea bug-urilor

1. Verifică dacă problema a fost deja raportată
2. Creează un issue cu descrierea detaliată
3. Include pașii de reproducere

### Îmbunătățiri

1. Creeaza un fork pentru repository
2. Creează un branch pentru feature
3. Implementează modificările
4. Testează funcționalitatea
5. Creează un Pull Request

### Adăugarea de noi instituții

1. Creează un nou director pentru instituția respectivă
2. Implementează template-ul și logica specifică
3. Adaugă validările necesare
4. Testează cu date reale
5. Documentează specificul instituției

## 📄 Licență

Acest proiect este lansat sub licența **GNU General Public License v3**. Vezi fișierul `LICENSE` pentru detalii complete.

**Principalele prevederi ale licenței GPL v3:**
- **Libertatea de a rula** programul pentru orice scop
- **Libertatea de a studia** cum funcționează programul și de a-l modifica
- **Libertatea de a redistribui** copii
- **Libertatea de a distribui** versiuni modificate

**Obligații pentru utilizatori:**
- Codul sursă trebuie să fie disponibil
- Modificările trebuie să fie licențiate sub aceeași licență GPL v3
- Trebuie să se păstreze notificările de copyright și licență

## ⚠️ Disclaimer

**Acest generator este oferit cu titlu informativ.**

- Răspunderea pentru corectitudinea și veridicitatea datelor completate aparține exclusiv persoanei care folosește formularul
- Pentru detalii oficiale și instrucțiuni complete, consultați paginile oficiale ale instituțiilor respective
- Aplicația nu înlocuiește consilierea juridică profesională

## 📞 Contact

- **Website**: [generator-sesizari.ro](https://generator-sesizari.ro)
- **GitHub**: [revolter/Generator-Sesizari](https://github.com/revolter/Generator-Sesizari)

## 🏛️ Instituții și contacte

### CNCD
- **Website**: [cncd.ro](https://www.cncd.ro/depune-o-petitie)
- **Email**: support@cncd.ro

### CDEP
- **Website**: [cdep.ro](https://www.cdep.ro)
- **Email**: *se va adăuga când va fi implementat*

## 🙏 Mulțumiri

- **Instituțiile publice** pentru modelele oficiale
- **Comunitatea open source** pentru librăriile utilizate
- **Cursor** pentru IDE-ul excelent care a facilitat dezvoltarea acestui proiect

---

**Făcut cu ❤️ pentru comunitatea română**

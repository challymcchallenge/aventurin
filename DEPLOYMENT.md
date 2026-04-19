# Cabana Aventurin — Ghid de Deployment

## Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Theme**: next-themes (light/dark)
- **Deployment**: Vercel (gratuit)

---

## Pas 1: Creare repository GitHub

1. Du-te la [github.com/new](https://github.com/new)
2. Numește repo-ul: `cabana-aventurin`
3. Lasă Public sau Private, cum preferi
4. **Nu** bifa "Add README" (avem deja fișiere)
5. Click "Create repository"

## Pas 2: Inițializare Git și push

Deschide terminalul în folderul `cabana-aventurin/` și rulează:

```bash
git init
git add .
git commit -m "Initial commit — Cabana Aventurin website"
git branch -M main
git remote add origin https://github.com/USERNAME/cabana-aventurin.git
git push -u origin main
```

*(Înlocuiește `USERNAME` cu username-ul tău GitHub)*

## Pas 3: Deploy pe Vercel

1. Du-te la [vercel.com](https://vercel.com) și loghează-te cu contul GitHub
2. Click **"Add New Project"**
3. Selectează repo-ul `cabana-aventurin`
4. Vercel detectează automat Next.js — click **"Deploy"**
5. În 1-2 minute ai site-ul live!

## Pas 4: Domeniu custom (opțional)

- Dacă cumperi `cabanaaventurin.ro` (ex. de la Rotld.ro)
- În Vercel → Settings → Domains → Add Domain
- Adaugă recordurile DNS indicate de Vercel

---

## Actualizare conținut

### Servicii
Editează `data/servicii.json` — titluri, descrieri, prețuri, hook-uri de marketing.

### Fotografii
Adaugă/înlocuiește imagini în `public/media/` și actualizează referințele în cod.

### Texte
Toate textele sunt direct în componentele din `app/` și `components/`.

### Formular contact
Conectează formularul la un serviciu de email (ex. [Resend](https://resend.com) sau [Formspree](https://formspree.io)) prin actualizarea funcției `handleSubmit` din `app/contact/page.tsx`.

---

## Contacte
- **Cabana**: +40 724 771 278
- **Adresă**: Căzănești, Vața de Jos, 337504, România

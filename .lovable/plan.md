# Designová pravidla – Restart školství / Reforma 8PLUS2

Cíl prvního kroku: nastavit vizuální systém webu a ukázat ho na jednoduché stránce (průvodce stylem). Obsah prezentace přijde až v dalším kroku.

## Písma
- **Anton** – hlavní nadpisy (velké, úzké, těsné řádkování ~0.9, mírně stažené mezery mezi písmeny). Např. „Reforma 8PLUS2“, „8+2= restart školství“.
- **Archivo** – veškeré ostatní texty: podnadpisy (tučné 700–800, jako „Místo devítky dva roky na střední“), odstavce (400), drobné štítky (600, např. „Vize pro vzdělávání“).
- Kurzíva serif pro akcent v adrese webu („restart*skolstvi*.cz“) – použijeme Instrument Serif Italic, pouze pro tento detail.

## Barvy (z podkladů)
- Královská modrá (hlavní pozadí): #1F3FD9
- Tmavá námořnická (spodek přechodu): #141E6B
- Světlá nebesky modrá (střed přechodu): #4A90D9
- Tyrkysová / mint (zvýraznění, klíčová slova, šipky): #1EE3C8
- Bílá (text na modré): #FFFFFF

## Styl
- Pozadí: plynulý svislý přechod modrá → světle modrá → tmavě modrá, přes něj jemné **zrnění (grain/šum)** jako na plakátu.
- Velkorysé prázdné plochy, zarovnání vlevo, minimum prvků.
- Hierarchie: malý štítek vlevo nahoře → obří nadpis Anton (mint/bílá) → tučný podnadpis Archivo (bílá s mint koncem věty).
- Odkazy a výzvy ve formě „→ text“ se šipkou v mint barvě; tlačítka bez zaoblení nebo jen s malým zaoblením, mint výplň a tmavě modrý text.
- Žádné stíny ani rámečky karet – oddělení řešit barvou a prostorem.
- Logo ODS: prosím o nahrání souboru loga (SVG/PNG), jinak nechám místo jen textové.

## Co vznikne
Úvodní stránka = ukázka stylu: hlavní blok ve stylu banneru („Reforma 8PLUS2“ + podnadpis + odkaz), pod ním přehled barev, ukázky písma (nadpisy, podnadpis, odstavec, štítek) a vzorové tlačítko/odkaz.

## Technické detaily
- Fonty načtené z Google Fonts přes `<link>` v hlavičce (Anton, Archivo 400–800, Instrument Serif italic).
- Barvy jako sémantické tokeny v `src/styles.css` (oklch), tokeny `--font-display` / `--font-sans`, utility pro přechod a grain (SVG noise overlay).
- Pravidla uložím do paměti projektu, aby platila i pro další kroky.

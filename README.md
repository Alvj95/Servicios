# Servicios a bordo

Versión independiente del módulo **Servicios a bordo** de TrenTurnos, con su propia URL
(GitHub Pages): https://alvj95.github.io/Servicios/

- `index.html`: la página de entrada (nombre + matrícula), Ajustes y el aviso de
  «📨 te comparte el MOL». Le da al módulo lo que en TrenTurnos le da la app:
  la matrícula, la conexión a Supabase y el gesto de deslizar para actualizar.
- `servicios.html`: el módulo, **el mismo archivo** que `servicios/servicios.html`
  de TrenTurnos. Para actualizarlo, se copia encima.
- `manifest.webmanifest`, `sw.js`, `icono-*.png`: para poder instalarla en el móvil.

Comparte el MOL con TrenTurnos (mismas funciones `sv_*` de Supabase): un compañero
con TrenTurnos y otro con esta versión pueden pasárselo entre ellos.

## Publicar
Settings → Pages → «Deploy from a branch» → `main` / `(root)` → Save.
Cada vez que se sube un cambio a `main`, la página se actualiza sola en 1–2 minutos.

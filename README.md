# Smartway — Landing

Landing de Smartway (software a medida para PyMEs). SPA en React 19 + Vite 6 + Tailwind 4, en TypeScript.

## Levantar en local

**Requisitos:** Node.js 20+ y npm.

```bash
npm install
npm run dev
```

Queda en http://localhost:3000

> No hace falta configurar ninguna variable de entorno. El `.env.example` y la
> referencia a `GEMINI_API_KEY` en `vite.config.ts` son residuo del template
> original de AI Studio: **no se usan en ningún lado del código**.

Si el puerto 3000 está ocupado por otro proyecto, levantalo en otro:

```bash
npx vite --port=3100 --strictPort
```

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | Build de producción a `dist/` |
| `npm run preview` | Sirve el build de `dist/` para verificarlo |
| `npm run lint` | Typecheck con `tsc --noEmit` (sin ESLint) |

## Rutas

No hay router: `src/App.tsx` elige la página según `window.location.pathname`.
Eso funciona porque `vercel.json` reescribe todas las rutas a `/`. **Cualquier
otro hosting necesita el mismo fallback a `index.html`**, o todo lo que no sea
`/` va a dar 404 al recargar.

| Ruta | Página | Nota |
|---|---|---|
| `/` | `components/v2/V2Landing.tsx` | Landing activa |
| `/v2` | `components/v2/V2Landing.tsx` | Mismo contenido que la home; se mantiene para no romper links ya compartidos |
| `/v1` | Landing original (inline en `App.tsx`) | Versión anterior, conservada para comparar |
| `/kit40` | `components/Kit40Page.tsx` | Programa KIT 4.0, con calculadora |
| `/thank-you` | `components/ThankYouPage.tsx` | Destino post-agendamiento, usada para trackear la conversión |

## Estructura

```
src/
  App.tsx                  # routing por pathname
  main.tsx
  lib/tracking.ts          # eventos al dataLayer de GTM + scrollToForm()
  components/
    v2/                    # landing activa
      V2Landing.tsx        # composición de la página
      HeroV2.tsx
      QualifyForm.tsx      # booking widget de LeadConnector
      WhatsAppFab.tsx, WhatsAppButton.tsx
    Header.tsx, Footer.tsx, Hero.tsx, ProblemSection.tsx,
    SaaSVSCustom.tsx, ROICalculator.tsx, ServicesSection.tsx,
    TestimonialsSection.tsx, FAQSection.tsx    # compartidos entre v1 y v2
    CalendarSection.tsx    # solo /v1
    Kit40Page.tsx, ThankYouPage.tsx
```

## Integraciones externas

Todo se carga por script embebido en el cliente; no hay backend propio.

- **Agendamiento (home y `/v2`):** booking widget de LeadConnector en un iframe,
  en `components/v2/QualifyForm.tsx`. El script `link.msgsndr.com/js/form_embed.js`
  hace el auto-resize del iframe.
- **Agendamiento (`/v1`):** calendario de HubSpot Meetings, en `CalendarSection.tsx`.
- **`/kit40`:** form de HubSpot Forms (portal `50321602`).
- **Analytics:** `lib/tracking.ts` empuja eventos al `dataLayer` de GTM. El GTM se
  carga desde el sitio, no desde este repo.

### Cómo se trackea la conversión

El booking de LeadConnector va en un iframe cross-origin, así que **no se puede
detectar el submit desde el JS de la página**. La conversión se mide con el
redirect a `/thank-you`, que se configura del lado de LeadConnector, no acá. Si
se toca ese widget, hay que verificar que el redirect siga puesto.

## Deploy

Preparado para Vercel: build `npm run build`, output `dist/`, y el rewrite SPA ya
está en `vercel.json`. En cualquier otro hosting hay que replicar ese fallback a
`index.html` (ver "Rutas").

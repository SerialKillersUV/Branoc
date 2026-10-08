# Compañía Branoc

Rediseño estático para GitHub Pages. Seis páginas, recursos locales y animaciones que respetan la preferencia de movimiento reducido. No requiere Node, npm, servidores, cuentas ni compilación.

## Publicación en GitHub Pages

1. Descomprime el ZIP.
2. Crea un repositorio de GitHub o utiliza el repositorio destinado a la compañía.
3. Sube **el contenido de la carpeta `branoc`** a la raíz del repositorio. `index.html` debe quedar directamente en la raíz, junto a `styles.css`, `app.js`, `config.js` y la carpeta `assets`. No subas únicamente el ZIP.
4. En **Settings → Pages → Build and deployment**, elige **Deploy from a branch**.
5. Selecciona la rama **main** y la carpeta **/(root)**; guarda.
6. GitHub mostrará la dirección cuando termine la publicación. Puede tardar unos minutos.

Los enlaces son relativos: funcionan tanto en un dominio propio como dentro de una ruta de proyecto de GitHub Pages.

## Revisar antes de publicar

- Revisa las seis páginas en ordenador y móvil. La versión entregada se ha comprobado mediante verificaciones de contenido, enlaces y sintaxis; no se ha podido realizar la revisión visual en un navegador de esta sesión.
- Confirma con la Administración la correspondencia actual de nombres entre las fichas de Unidades y el organigrama. Se han conservado ambas fuentes sin asumir equivalencias.
- Los enlaces de Discord, TeamSpeak y descarga son los originales de la web. Se sustituirán cuando se faciliten los definitivos.

## Cambiar enlaces y dirección de TeamSpeak

Edita `config.js`. Sus valores se aplican a todos los botones de contacto al cargar las páginas. Actualiza también los atributos `href` originales y el texto de la dirección en `contacto.html` si quieres que el cambio esté disponible incluso con JavaScript desactivado.

## Organigrama

`organigrama.html` reproduce la pestaña visible **Compañia Branoc** del documento compartido, consultada el **08/10/2026**. Incluye mando, ramas, unidades, escuadras, personal y frecuencias. No incluye las pestañas ocultas del documento.

La vista web es una instantánea; **no se sincroniza automáticamente**. El botón **Abrir hoja actualizada** abre el documento original. Cuando cambie la plantilla, actualiza `organigrama.html` y `data/organigrama.json`, así como la fecha indicada en la página. El archivo JSON conserva las celdas de la pestaña visible para facilitar esa revisión.

## Estructura

- `index.html`: inicio, presentación, oferta, horarios y acceso a comunicaciones.
- `acceso.html`: proceso completo de reclutamiento, con las dos capturas originales.
- `normativa.html`: normativa íntegra, con índice y correcciones de redacción.
- `unidades.html`: Cerberus, Dagger, Sereco, Draken y Cuervo, más la aclaración sobre la academia Foxtrot.
- `organigrama.html`: estructura de la compañía.
- `contacto.html`: Discord, staff y TeamSpeak 3.
- `assets/`: emblemas, capturas, fuente local y fondo topográfico decorativo.
- `docs/contenido-original.md`: archivo de los textos originales para mantenimiento.
- `docs/cambios.md`: correcciones y datos que necesitan confirmación de la compañía.

## Compatibilidad y mantenimiento

Puedes abrir `index.html` directamente en tu ordenador para revisar la web; en GitHub Pages también funcionará el botón para copiar TeamSpeak. Si el navegador no permite copiar al portapapeles, selecciona la dirección para copiarla manualmente.

El menú móvil funciona sin JavaScript. La normativa y el organigrama son HTML visible, sin descargas de datos ni dependencia de Google para mostrarse. No se cargan fuentes remotas, trackers ni bibliotecas externas.

Los emblemas y capturas se han recuperado de la web original. Se mantienen para el uso de la compañía. La licencia de la fuente Nimbus Sans Narrow se incluye en `assets/FONT-LICENSE.txt`.

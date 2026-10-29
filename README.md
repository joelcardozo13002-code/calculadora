# Calculadora ET403 · Semana 9

Aplicación web académica que conserva las operaciones de la calculadora recibida de la semana 7 (suma y división) y añade un conversor de unidades de longitud y masa.

## Archivos

- `index.html`: estructura de la página y campos de entrada.
- `styles.css`: estilos y personalización visual.
- `app.js`: validaciones, operaciones originales y lógica de conversión.
- `index_original.html`: copia sin modificar del archivo original entregado para esta adaptación.

## Cómo ejecutar

1. Descargue o extraiga todos los archivos en una misma carpeta.
2. Abra `index.html` en un navegador web actualizado.
3. Pruebe la calculadora y el conversor.

No necesita instalar paquetes ni ejecutar un servidor local para probar esta versión.

## Operaciones conservadas

El archivo original proporcionado contiene las operaciones de suma y división. Se conservaron ambas, junto con la validación de entradas vacías, números no finitos y divisor igual a cero. No se añadieron operaciones aritméticas que no aparecían en el archivo recibido.

## Conversiones disponibles

- Metros a centímetros: factor 100.
- Centímetros a metros: factor 0.01.
- Kilogramos a gramos: factor 1000.
- Gramos a kilogramos: factor 0.001.

La lógica utiliza un arreglo de objetos JavaScript y una función reutilizable para calcular. Se aceptan cero y decimales; se rechazan campos vacíos, valores no finitos y números negativos.

## Personalización

- Color principal: azul `rgb(30, 64, 175)` / `#1E40AF`.
- Fondo: `#F3F6FC`.
- Texto principal: `#172033`.
- Etiqueta/título: se actualizó el texto principal y el tamaño del título se controla con CSS.

## Tabla de pruebas sugerida

Completar la columna “Obtenido” después de ejecutar cada prueba en el navegador. No registrar como comprobada una prueba que no se haya ejecutado.

| Entrada                       | Esperado           | Obtenido               | Corrección                 |
| ----------------------------- | ------------------ | ---------------------- | -------------------------- |
| 1 m → cm                      | 100 cm             | Pendiente de ejecución | No aplica si coincide      |
| 100 cm → m                    | 1 m                | Pendiente de ejecución | No aplica si coincide      |
| 1 kg → g                      | 1000 g             | Pendiente de ejecución | No aplica si coincide      |
| 1000 g → kg                   | 1 kg               | Pendiente de ejecución | No aplica si coincide      |
| 0 m → cm                      | 0 cm               | Pendiente de ejecución | No aplica si coincide      |
| 1.5 m → cm                    | 150 cm             | Pendiente de ejecución | No aplica si coincide      |
| Conversión con campo vacío    | Mensaje de error   | Pendiente de ejecución | Registrar si fue necesario |
| Conversión con valor negativo | Mensaje de rechazo | Pendiente de ejecución | Registrar si fue necesario |
| Suma: 12 y 3                  | 15                 | Pendiente de ejecución | Registrar si fue necesario |
| División: 12 entre 3          | 4                  | Pendiente de ejecución | Registrar si fue necesario |
| División entre cero           | Mensaje de error   | Pendiente de ejecución | Registrar si fue necesario |
| Calculadora con campo vacío   | Mensaje de error   | Pendiente de ejecución | Registrar si fue necesario |

## GitHub y GitHub Pages

Después de crear el repositorio, sustituir estos marcadores por los enlaces reales:

- Repositorio: `PEGAR_AQUI_EL_ENLACE_DEL_REPOSITORIO`
- Sitio publicado: `PEGAR_AQUI_EL_ENLACE_DE_GITHUB_PAGES`

Para publicar: abra la configuración del repositorio en GitHub, entre a **Pages**, seleccione la rama principal y la carpeta raíz (`/root`), guarde y espere a que GitHub genere el enlace. Luego abra ese enlace y pruebe las funciones publicadas.

## Aportes del grupo

Completar con los nombres y aportes reales de cada integrante:

- Integrante 1: `[nombre y aporte]`
- Integrante 2: `[nombre y aporte]`
- Integrante 3: `[nombre y aporte, si corresponde]`

## Uso de inteligencia artificial

Si se utilizó una herramienta de IA, documentar herramienta y fecha, consultas relevantes, respuestas aprovechadas, adaptaciones realizadas, errores corregidos y pruebas propias. Si no se utilizó, indicarlo explícitamente. Revisar y comprender el código antes de entregarlo.

## Fuentes y recursos

- Consigna de la actividad ET403 · Semana 9, proporcionada por el docente.
- Archivo original de la calculadora de la semana 7 proporcionado por el grupo.
- Fragmentos «Fragmentos de integración · ET403 · S9»: añadir aquí el enlace exacto o los datos del recurso docente cuando estén disponibles.

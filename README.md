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

| Entrada | Esperado | Obtenido en prueba automatizada | Corrección/obaservacion
| 1 m → cm | 100 cm | 1 m = 100 cm | Correcto; si se realizo
| 100 cm → m | 1 m | 100 cm = 1 m | Correcto; si se realizo
| 1 kg → g | 1000 g | 1 kg = 1000 g | Correcto; si se realizo
| 1000 g → kg | 1 kg | 1000 g = 1 kg | Correcto; si se realizo
| 0 m → cm | 0 cm | 0 m = 0 cm | Correcto; cero aceptado
| 1.5 m → cm | 150 cm | 1.5 m = 150 cm | Correcto; decimal aceptado
| Conversor vacío | Mensaje de validación | Ingrese un valor para realizar la conversión. | Correcto; no convierte
| Conversor negativo (-2) | Rechazo de negativo | No se aceptan valores negativos. | Correcto; no convierte
| Conversor texto (abc) | Número finito válido | Ingrese un número finito válido. | Correcto; no convierte
| Suma: 12 y 3 | 15 | Suma: 15 | Correcto; si se realizo
| División: 12 entre 3 | 4 | División: 4 | Correcto; si se realizo
| División: 12 entre 0 | Mensaje de división entre cero | No se puede dividir entre cero. | Correcto; evita división entre cero
| Calculadora con campo vacío| Mensaje de validación | Complete las dos entradas. | Correcto; no calcula

## GitHub y GitHub Pages

Después de crear el repositorio, sustituir estos marcadores por los enlaces reales:

- Repositorio: `https://github.com/joelcardozo13002-code/calculadora`
- Sitio publicado: `https://joelcardozo13002-code.github.io/calculadora/`

Para publicar: abra la configuración del repositorio en GitHub, entre a **Pages**, seleccione la rama principal y la carpeta raíz (`/root`), guarde y espere a que GitHub genere el enlace. Luego abra ese enlace y pruebe las funciones publicadas.

## Aportes del grupo

Completar con los nombres y aportes reales de cada integrante:

- Integrante 1: `[Fernando Joel Cardozo Marin: Organización y revisión general del informe del proyecto.]`
- Integrante 2: `[Dan Gabriel Castro Castro: Revisión de la estructura de la página y de los elementos de la interfaz en index.html.]`
- Integrante 3: `[Edwin Omar Huancas Sánchez: Revisión de los estilos visuales, la distribución de los paneles y la adaptación a pantallas pequeñas en styles.css.]`
- Integrante 4: `[Gabriel Tarrillo Quintana: Revisión de las operaciones de suma y división, así como de sus validaciones en app.js.]`
- Integrante 5: `[Danfer Jared Rodriguez Malca: Revisión de las conversiones de longitud y masa, incluidos sus factores de conversión.]`
- Integrante 6: `[Alexis Esmith Llatas Aguilar: Revisión de los mensajes de resultado y de la validación de entradas incorrectas.]`
- Integrante 7: `[Yuri Rene Sunka Samaren: Apoyo en la organización de las pruebas propuestas y de las instrucciones de uso del proyecto en README.md.]`

## Uso de inteligencia artificial

Si se utilizó una herramienta de IA, documentar herramienta y fecha, consultas relevantes, respuestas aprovechadas, adaptaciones realizadas, errores corregidos y pruebas propias. Si no se utilizó, indicarlo explícitamente. Revisar y comprender el código antes de entregarlo.

## Fuentes y recursos

- Docente de ET403. (2026). Fragmentos de integración · ET403 · S9 [https://maxedra.maxcorpsystem.com/courses/4/assignments/20].
- Repositorio GitHub: .[https://github.com/joelcardozo13002-code/calculadora]
- Sitio publicado (GitHub Pages): [https://joelcardozo13002-code.github.io/calculadora/]

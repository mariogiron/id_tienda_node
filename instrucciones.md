## Recuperar Productos

URL: /api/products METHOD: GET

### Test

- El status de la respuesta es 200
- El contenido de la respuesta venga en formato JSON
- La respuesta es un array

## Código

- GET /api/products
- Crear api.js (router...exports router...)
- Enlazar app.js con api.js (miramos cómo está hecho)
- Crear api/products.js
- Enlazar api.js con api/products.js
- Crear el manejador dentro de api/products.js
- Responder con res.end()

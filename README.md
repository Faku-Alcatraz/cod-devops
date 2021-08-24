# lippia-open-challenge-2021

## Contenido

- carpeta **docs** dejen cualquier documentacion adicional al README, imagenes o lo que crean conveniente
- carpeta **src** dejen el codigo fuente del test automatizado
- Dockerfile a completar contenido

## Integracion con Lippia ReportServer

Se realizara mediante una llamada al API REST. Este es un ejemplo de invocacion:

```commandline
$ curl --location --request POST 'http://api.dev.lippia.io/api/v2/json/report' \
--header 'X-API-KEY: {your_api_key}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "projectName": "PRU-002",
  "reportName": "REPORT-003",
  "features": [
    {
      "name": "FEATURE-001",
      "description": "Feature description",
      "tags": [
        "@Feature"
      ],
      "author": "author_001",
      "device": "device_001",
      "type": "type_001",
      "tests": [
        {
          "name": "test_001",
          "description": "Test description",
          "tags": [
            "@Test"
          ],
          "author": "test_author_001",
          "device": "test_device_001",
          "type": "test_type_001",
          "duration": 120,
          "status": "PASS",
          "base64Image": "string",
          "startTime": "18/08/2021 10:00:00"
        }
      ],
      "startTime": "18/08/2021 10:00:00"
    }
  ]
}'

valid values for status are: [ pass, fail, fatal, error, warning, info, debug, skip ]

```
El apiKey les llegara por mail a cada uno.

# Pasos a seguir

- Generen un nuevo proyecto a partir del boton "Use this template" en la parte superior
- Mantengan la estructura de directorios y el archivo LICENCE
- Reemplacen el contenido del README con la informacion necesaria para entender y ejecutar el proyecto

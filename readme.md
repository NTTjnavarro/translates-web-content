# loyalty-translates

## Instalación

```bash
pnpm i
```

# Configuración

En el archivo `src/constants/constants.ts` se puede configurar las rutas de los archivos JSON que se van a analizar y las claves que se van a buscar en cada uno de ellos.

```typescript
export const CONSTANTS = {
  IbWebContentDir: "C:/dev/gitlab/librerias/iberia-web-content",
  findKeys: [],
};
```

## Ejemplo

Si queremos buscar las claves `title` y `description` en todos los archivos JSON que se encuentren en el directorio `C:/dev/gitlab/librerias/iberia-web-content`, podemos configurar la siguiente configuración:

```typescript
export const CONSTANTS = {
  IbWebContentDir: "C:/dev/gitlab/librerias/iberia-web-content",
  findKeys: ["title", "description"],
};
```

## Ejecución

Una vez configurado el archivo `src/constants/constants.ts`, podemos ejecutar el script con el siguiente comando:

```bash
pnpm start
```

## Salida

Una vez ejecutado el script, se creará un archivo `translates.xlsx` en la raíz del proyecto, que contendrá todas las claves y sus traducciones correspondientes.

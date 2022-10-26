# Curso Angular 11

# CONFIGURACIÓN INICIAL

Hola Chikis este sera el repositorio donde aprenderemos angular 11, si quieres saber más a detalle ingresa a mi canal y revisa el código, gracias. 😎
https://www.youtube.com/c/LogiDev

## Migracion TSLint a ESLint Angular < v12

Recuerda que estos pasos solo aplica a las versiones que estan antes de la versión 12, ya que esas versiones usaban TSLint y generaban un archivo llamado **_tslint.json_**.

Ejecuta el siguiente comando en tu consola

```
ng add @angular-eslint/schematics
ng g @angular-eslint/schematics:convert-tslint-to-eslint --remove-tslint-if-no-more-tslint-targets --ignore-existing-tslint-config
```

Cuando termine de ejecutar esos comandos ya puedes eliminar el archivo **_tslint.json_**.

## Instalación EsLint Angular >= v12

Esta configuración solo aplica si usas angular versión 12 o superior.

```
ng add @angular-eslint/schematics
```

más información en: https://github.com/angular-eslint/angular-eslint

## Code Quality

1. Prettier
2. eslint-config-prettier
3. eslint-plugin-prettier

Ejecuta el siguiente comando en tu consola

```
npm install -D prettier eslint-config-prettier eslint-plugin-prettier
```

Luego dentro de tu archivo .eslinttrc.json agrega lo siguiente en la sección **extends** de las configuraciones para los archivos **.ts**
Configuración para los archivos TS:

```json
    		"extends": [
			      "plugin:@angular-eslint/recommended",
       			  "plugin:@angular-eslint/template/process-inline-templates",
       			  "eslint:recommended",
       			  "plugin:@typescript-eslint/recommended",
        		  "plugin:@typescript-eslint/recommended-requiring-type-checking",
       			  "plugin:prettier/recommended"
			]
```

Configuración para los archivos HTML:

```json
	"extends": [
		  "plugin:@angular-eslint/template/recommended",
      "plugin:prettier/recommended"
			],
```

Si vas usar archivos **_.spec_** debes de ignorarlos ya que los archivos de test sirven para realizar simulaciones y el codigo que escribamos puede que no cumpla con las especificaciones de ESLint, para ignorarlos debes de agregar en la sección **ignorePatterns** lo siguiente:

```json
	"ignorePatterns": ["projects/**/*", "src/app/**/*.spec.ts"],
```

## Configurar archivos Prettier

Debes de crear los siguientes archivos en la raíz de tu proyecto:

1. .prettierrc
2. .prettierignore

dentro del archivo **.prettierrc** coloca lo siguiente:

```json
{
	"arrowParens": "always",
	"bracketSpacing": true,
	"insertPragma": false,
	"printWidth": 100,
	"proseWrap": "preserve",
	"quoteProps": "as-needed",
	"requirePragma": false,
	"semi": true,
	"singleQuote": true,
	"tabWidth": 2,
	"trailingComma": "none",
	"useTabs": true,
	"endOfLine": "auto"
}
```

Para evitar formatear algunos archivos podemos hacer uso del archivo **.prettierignore**, agrega lo siguiente:

```console
node_modules/*
package-lock.json
yarn.lock
src/*.ts
src/index.html
src/environments/*.ts
```

Recuerda que puedes configurar los atributos a tu gusto, más información en https://prettier.io/playground/

Dentro tu archivo **package.json** existe una sección llamada **scripts**, dentro agregaras lo siguiente:

```json
"format": "prettier --write \"./src/**/*.{ts,json,html}\"",
"lint-format": "npm run format &&  ng lint --fix"
```

## Configurar Husky

💣 Alerta!!🚧
Si no se llega a ejecutar Husky al momento de realizar un commit a pesar de que ya agregaste las configuraciones, es debido a la actualización de la librería, para poder solucionar este problema desinstala husky y vuelve a instalar de la siguiente manera:

```
npm i -D husky@4.3.7 -E
```

Husky en su versión actual maneja los Hooks de git de una manera muy distinta y a mi parecer lo complicaron todo, prefiero esta manera de trabajar, más información en: https://typicode.github.io/husky/#/

Agrega lo siguiente a tu archivo package.json

```json
	"husky": {
		"hooks": {
			"pre-commit": "npm run lint-format && git add ."
		}
	}
```


Pueden escribirme si tiene dudas chikis, gracias por su apoyo.🤗

🤔¿Quieres saber más de angular? Mira mi curso en YouTube
https://youtube.com/playlist?list=PLy09ETjgu8VqSJgZXiiL-pSg4g1xbowGE

Suscríbete a mi canal 😎
www.youtube.com/c/fuckynCode

**Sígueme en mis redes:**
👉Facebook : https://facebook.com/LogiDev  
búscame como: @LogiDev
👉Instagram: https://instagram.com/jimyhdolores/  
búscame como:  @jimyhdolores  
👉Twitter: https://twitter.com/jimyHDolores  
búscame como: @jimyHDolores  
👉LinkedIn: https://linkedin.com/in/jimyhuachodolores/  
búscame como: @jimyhuachodolores  

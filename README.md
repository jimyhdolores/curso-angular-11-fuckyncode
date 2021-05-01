# Curso Angular 11

# CONFIGURACIÓN INICIAL

Hola Chikis este sera el repositorio donde aprenderemos angular 11, si quieres saber más a detalle ingresa a mi canal y revisa el código, gracias. 😎
https://www.youtube.com/c/fuckynCode

## Migracion TSLint a ESLint

Ejecuta el siguiente comando en tu consola

```
ng add @angular-eslint/schematics
ng g @angular-eslint/schematics:convert-tslint-to-eslint {{NOMBRE-PROYECTO}}
```

## Code Quality

1. Prettier
2. eslint-config-prettier
3. eslint-plugin-prettier

Ejecuta el siguiente comando en tu consola

```
npm install -D prettier eslint-config-prettier eslint-plugin-prettier
```

Luego dentro de tu archivo .eslinttrc.json agrega lo siguiente, recuerda ver el video para que no tengas problemas:

Configuración para los archivos TS:

```json

    		"extends": [
				"plugin:@angular-eslint/recommended",
				"plugin:@angular-eslint/template/process-inline-templates",
				"eslint:recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
				"prettier/@typescript-eslint",
				"plugin:prettier/recommended"
			]
```

Configuración para los archivos HTML:

```json
	"extends": [
				"plugin:@angular-eslint/template/recommended",
				"prettier/@typescript-eslint",
				"plugin:prettier/recommended"
			],
```

## Configurar archivos Prettier

dentro del archivo .prettierrc coloca lo siguiente:

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

Recuerda que puedes configurar los atributos a tu gusto, más información en https://prettier.io/playground/

Dentro del archivo .prettierignore agrega lo siguiente:

```
node_modules/*
package-lock.json
yarn.lock
src/*.ts
src/index.html
src/environments/*.ts
```

## Configurar Husky

💣 Alerta!!🚧
Si no se llega a ejecutar Husky al momento de realizar un commit a pesar de que ya agregaste las configuraciones, es debido a la actualización de la librería, para poder solucionar este problema desinstala husky y vuelve a instalar de la siguiente manera:

```
npm i -D husky@4.3.7
```

Husky en su versión actual maneja los Hooks de git de una manera muy distinta a lo que presento en el video y a mi parecer lo complicaron todo, prefiero esta manera de trabajar, más información en: https://typicode.github.io/husky/#/

Agrega lo siguiente a tu archivo package.json

```json
	"husky": {
		"hooks": {
			"pre-commit": "pretty-quick --staged && ng lint && git add ."
		}
	}
```

Pueden escribirme si tiene dudas chikis, gracias por su apoyo.🤗

🤔¿Quieres saber más de angular? Mira mi curso en YouTube
https://youtube.com/playlist?list=PLy09ETjgu8VqSJgZXiiL-pSg4g1xbowGE

Suscríbete a mi canal 😎
www.youtube.com/c/fuckynCode

Sígueme en mis redes:
Facebook : www.facebook.com/fukyncode  
búscame como: @fukyncode

Instagram: www.instagram.com/jimyhdolores/  
búscame como: @jimyhdolores

Twitter: twitter.com/jimyHDolores  
búscame como: @jimyHDolores

LinkedIn: www.linkedin.com/in/jimyhuachodolores/  
búscame como: @jimyhuachodolores

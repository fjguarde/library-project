# Bibliote Angular **@fjg/ngx-componentes**

![Angular](https://angular.io/assets/images/logos/angular/angular.svg)

## Contenido

- [Instalación](#instalación)
- [Uso](#uso)
- [Componentes Incluidos](#componentes-incluidos)
- [Directivas Incluidas](#directivas-incluidas)
- [Instalación desde npm](#inslación)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Instalación

Para instalar la biblioteca @fjg/ngx-components desde npm, sigue estos pasos:
1. Abre una terminal en el directorio raíz de tu proyecto Angular.
2. Ejecuta el siguiente comando para instalar la biblioteca:

```sh
npm install @fjg/ngx-components
```
Una vez instalada, puedes importar los módulos necesarios en tu archivo AppModule como se muestra en la sección de uso.

## Uso

```sh
import { TopButtonModule } from '@fjg/top-button.module.ts';

@NgModule({
  imports: [
    TopButtonModule
    // otros módulos
  ],
  // otros elementos de configuración
})
export class AppModule { }
```

## Componentes incluidos
- **Top-button**: Botón en pie de página para hacer scroll al inicio.
- **Card-user**: Tarjeta para agrupar datos de usuarios.

## Directivas incluidas
- **Highlight**: Usada para marcar texto encontrado.

## Contribución
Si deseas contribuir, por favor, sigue estas pautas:

1. Haz un fork del repositorio.
2. Crea una rama para tu nueva funcionalidad (git checkout -b nueva-funcionalidad).
3. Realiza tus cambios y haz commit (git commit -am 'Añadir nueva funcionalidad').
4. Envía tus cambios a tu fork (git push origin nueva-funcionalidad).
5. Crea un Pull Request en GitHub.

## Licencia
Este proyecto está licenciado bajo la licencia MIT - consulta el archivo LICENSE para más detalles.

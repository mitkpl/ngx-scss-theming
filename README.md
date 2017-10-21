*Still in progress...*
# SCSS multi-theming
Ever wander about multi css themes in your project? This is how easly you can do multi themes by dynamic generator.
This is example project witch Angular 4.

Main scss files

 * src/styles.scss - *entry point of themer*
 * src/assets/themer.scss - *theme CSS definitions*
 * src/assets/variables.scss - *as its says*
 * src/assets/global.scss - *global definitions based only on default variables map*
 * src/assets/mixins.scss - *some extra mixins from me*
 * src/assets/forms.scss - *global forms definitions*

 Files such as *themer.scss*, *variables.scss* and *global.scss* are necessary. Other files as *mixins.scss* or *forms.scss* are optional, and another varies can be add at its discretion.

----------
## Installation
Project has standard angular-cli methods. 

 1. Pull repository
 2. Download dependencies `npm install`
 3. Run project `ng serve`
 4. Or build it `ng build`

For more *angular-cli* documentation check [Angular docs](https://angular.io/guide/quickstart)
----------

----------
## Use

 1. Add class `theme-default` to `body` element of `src/index.html`
 2. Define maps of variables in `src/assets/css/_variables.scss`
 3. Define variables in maps in `src/assets/css/_variables.scss`
 4. Add defined maps (i.e. `$default`) to `$themes` *array* in `src/styles.scss`
 3. Add CSS whatever definitions to `src/assets/css/_themer.scss`

## Examples and demo
The whole project is treated as example of use. You can build your own app based on this Angular architecture. Any changes designed by author (me) are about CSS, not JavaScript (or TS).

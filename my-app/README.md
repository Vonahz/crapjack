# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#Project description

App Structure: 
 -app
 --pipes ( 1 pipe for calculating point from cards)
 --services ( 1 service for deck api )
 --views ( all views in the app )

Missing things:

Unit tests. I don't write unit test in my daily work so I will need more time to learn how to use them in their best.
Not expirienced in css animations so I used the easiest solution for me.
Don't have player profiles neither highest scores.
Track game session scores.
Back-end component.

Main functionallity:

DECK API was used for the cards and images - http://deckofcardsapi.com/.
Added 1 scss file for css animations - http://daneden.me/animate.
Primeng was used for UI. ( Could have lived without it for this app actually :D) - https://www.primefaces.org/primeng/#/.
Bootstrap was added to ease the styling.


UI:

1.Play 
2.View rules

1.Play :
 1.Click deck to draw cards.
 2.Reveal button -> show dealer cards -> finish the game and calculate score.
 3.Option to deal again.


 DEMO


"# crapjack" 

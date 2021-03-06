# PunKtuator Frontend 

React frontend for PunKtuator project.

## Todo:
- [x] Create basic wireframe
- [x] Structure JS
- [x] Sample REST API (JS based)
- ~~[ ] Debounce submit on type~~
- [x] Update to real REST API
- [x] Style
- [x] Add upload text file option
- [x] Remove lang selector
- [x] Refactor
- [x] Move tabs to center
  - [x] Home (Description)
  - [x] Punctuate
  - [x] Annotate
    - [x] Dropdown box (Enter the style of text)
      - [x] Written
      - [x] Spoken
- [x] Add shadow to title bar
- [ ] Add extension
  - Pack extension/ folder


## Assumed API Spec
POST `/punctuate`
```json
{
    "input_text": "myTextHere"
}
```
POST `/annotate`
```json
{
    "input_text": "myTextHere",
    "text_style": "writtenOrSpoken"
}
```

## Building
- Output will be HTML+JS in `build/` dir, serve these files via nginx, apache, etc
- Clone this repo & `cd` into it
- `$ npm install`
- `$ npm run build`

## Running Dev
- Clone this repo & `cd` into it
- `$ npm install`
- `$ npm run start`

## LICENSE
[MIT](./LICENSE) &copy; 2020 Varnith Chordia & Sebastian Safari

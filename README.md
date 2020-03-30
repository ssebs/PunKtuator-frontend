# PunKtuator Frontend 

React frontend for PunKtuator project

## Todo:
- [x] Create basic wireframe
- [x] Structure JS
- [x] Sample REST API (JS based)
- [ ] Debounce submit on type
- [x] Update to real REST API
- [x] Style
- [ ] Add upload text file option
- [ ] Remove lang selector
- [ ] Refactor
- [ ] Add tests?


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
    "input_text": "myTextHere"
}
```

## Building
- Output will be HTML+JS in `build/` dir, serve these files via nginx, apache, etc
- Clone this repo & `cd` into it
- `$ npm install`
- `$ npm run build`

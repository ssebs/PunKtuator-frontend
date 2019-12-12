# PunKtuator Frontend 

React frontend for PunKtuator project

## Todo:
- [x] Create basic wireframe
- [x] Structure JS
- [ ] Sample REST API (JS based)
- [ ] Debounce submit on type
- [ ] Update to real REST API
- [ ] Style
- [ ] Refactor
- [ ] Add tests?


## Assumed API Spec
POST `/punctuate`
```json
{
    "lang": <Str>,
    "text": <Str>
}
```

## Building
- Output will be HTML+JS in `build/` dir, serve these files via nginx, apache, etc
- Clone this repo & `cd` into it
- `$ npm install`
- `$ npm run build`

## Text Wireframe
```
-------------------------------------
|                                   |
|             PunKtuator            |
|                                   |
|      Input      |     Output      |
|  -------------------------------  |
|  | enter you're | Enter your   |  |
|  | text here    | text here.   |  |
|  |              |              |  |
|  |              |              |  |
|  |              |              |  |
|  |              |              |  |
|  -------------------------------  |
|   ------------    ------------    |
|   |  Lang  |v|    |  Submit  |    |
|   ------------    ------------    |
|                                   |
|   (c) 2019 Varnith Chordia +      |
|     Sebastian Safari              |
|                                   |
-------------------------------------
```

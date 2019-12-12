# punctuator 

Punctuator frontend.

## Todo:
- [x] Create basic wireframe
- [x] Structure JS
- [ ] Sample REST API (JS based)
- [ ] Debounce submit on type
- [ ] Update to real REST API
- [ ] Refactor
- [ ] Add tests?

## Text Wireframe
```
-------------------------------------
|                                   |
|             Punctuator            |
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

## Assumed API Spec
POST `/punctuate`
```json
{
    "lang": <Str>,
    "text": <Str>
}
```

## Building
- Clone this repo & `cd` into it
- `$ npm install`
- `$ npm run build`


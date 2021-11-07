# auth-test

### `/auth` POST
```
  body {
    ...,
  }
```
```
  header {
    expiresIn?: <number>,
    time?: <number> (opcional)
  }
  
```
#### retorno
```
  {
    user: {
      ...body,
      createdAt: <Date>,
    },
    expiresIn: <number>,
    token: <string>
  }
```

### `/private` GET
```
  header {
    Authorization: Bearer <token>,
    id: <string>,
    time?: <number> (opcional)
  }
```
#### retorno
```
  {
    status: <string>
  }
```

-----------

## Detalhes

| Rota   | body                    | header                                 |
|--------|-------------------------|----------------------------------------|
| /auth  |  qualquer (obrigatório) | **expiresIn**: `expiração do token (seg.)`, **time**: `Tempo de espera`|
|/private|  Nenhum                 | **Authorization**: Bearer + `<token>`, **id**: retornado pela `/auth`, **time**: `tempo de espera (seg.)`  |

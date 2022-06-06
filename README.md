
# ML CAPTCHA

A brief description of what this project does and who it's for


## Installation

Install yeskendyr with npm

```bash
  npm install yeskendyr
```

## Documentation

[GitHub](https://linktodocumentation)


## Components

#### Tracker

```
  <Tracker />
```

| Parameter | Type     | Default                | Description                |
| :-------- | :------- | :------------------------- | :------------------------- |
| `store` | `object` | null | **Required** |
| `action` | `function` | null | **Required** |
| `assumption` | `function` | null | Allows you to perform a given action after a hypothesis (not implemented) |
| `useStrict` | `boolean/function` | false | Allows you to set rules for passing |
| `cursor` | `boolean` | false | To enable cursorTracker |
| `scroll` | `boolean` | false | To enable scroll tracker |
| `wheel` | `boolean` | false | To enable wheel tracker |
| `touch` | `boolean` | false | To enable touch tracker |

#### Verifier

```
  <Verifier />
```

| Parameter | Type     | Default                | Description                |
| :-------- | :------- | :------------------------- | :------------------------- |
| `store` | `object` |  | **Required** |
| `action` | `function` |  | **Required** |
| `lang` | `string` | en | Language |
| `implementedTest` | `React Functional Component <FC>` | null | Allows you to use a test developed by a personal |
| `onSuccess` | `function` |  | Allows to execute function callback after output |
| `onFail` | `function` |  | Allows to execute function callback after output |
| `hash` | `function` |  | Allows to execute function callback after output |

#### Paginator

```
  <Paginator />
```

| Parameter | Type     | Default                | Description                |
| :-------- | :------- | :------------------------- | :------------------------- |
| `store` | `object` |  | **Required** |
| `action` | `function` |  | **Required** |
| `onSuccess` | `function` |  | Allows to execute function callback after output |
| `onFail` | `function` |  | Allows to execute function callback after output |
| `hash` | `function` |  | Allows to execute function callback after output |



## Demo

Verifier

    <Verifier
        store={store}
        action={action}
        onSuccess={()=>setState({...state, success: true})}
        onFail={()=>console.log('You are Robot!!')}
        hash={(collectedHash)=>{
            if(list.includes(collectedHash))
                return false;
            set([...list, collectedHash])
            return true;
        }}
        lang={state.lang}
    />

Paginator

    <Paginator
        store={store}
        action={action}
        onSuccess={paginationElement.onSuccess}
        onFail={()=>console.log('You are Robot!!')}
        hash={(collectedHash)=>{
            if(list.includes(collectedHash))
                return false
            set([...list, collectedHash]);
            return true;
        }}
    />

Tracker

    <Tracker
        store={store}
        action={action}
        assumption={(assumption: object)=>console.log(assumption)}
        useStrict={true}
        cursor
        scroll
        touch
        wheel
    >
        <MainComponent
            store={store}
            action={action}
        />
    </Tracker>



## Authors

- [@Nurmaganbet](https://github.com/yesmukhamedov)


## Feedback

If you have any feedback, please reach out to us at yesmukhamedov.yeskendyr@gmail.com


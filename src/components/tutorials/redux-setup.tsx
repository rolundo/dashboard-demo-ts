import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Highlighter from '../ui/highlighter'
import { Typography } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
  },
}))

export default function ReduxSetupTutorial() {
  const classes = useStyles()

  return (
    <Container maxWidth='xl' component='main' className={classes.container}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant='h5'>Tutorial</Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph>
            {`To get Redux working with NextJS, we need to replace Redux's useDispatch and 
            useSelector hooks with custom hooks provided by the NextJS team. We will be using
            these custom hooks (useAppDispatch and useAppSelector) throughout our application:`}
          </Typography>
          <Highlighter
            codeString={`
              // hooks.ts
              import type { ChangeEvent } from 'react'
              import { useEffect, useRef } from 'react'
              import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
              
              import type { AppDispatch, AppState } from './store'
              
              export const useForm =
                <TContent>(defaultValues: TContent) =>
                (handler: (content: TContent) => void) =>
                async (event: ChangeEvent<HTMLFormElement>) => {
                  event.preventDefault()
                  event.persist()
              
                  const form = event.target as HTMLFormElement
                  const elements = Array.from(form.elements) as HTMLInputElement[]
                  const data = elements
                    .filter((element) => element.hasAttribute('name'))
                    .reduce(
                      (object, element) => ({
                        ...object,
                        [\`\${element.getAttribute('name')}\`]: element.value,
                      }),
                      defaultValues
                    )
                  await handler(data)
                  form.reset()
                }
              
              // https://overreacted.io/making-setinterval-declarative-with-react-hooks/
              export const useInterval = (callback: Function, delay: number) => {
                const savedCallback = useRef<Function>()
                useEffect(() => {
                  savedCallback.current = callback
                }, [callback])
                useEffect(() => {
                  const handler = (...args: any) => savedCallback.current?.(...args)
              
                  if (delay !== null) {
                    const id = setInterval(handler, delay)
                    return () => clearInterval(id)
                  }
                }, [delay])
              }
              
              // Use throughout your app instead of plain \`useDispatch\` and \`useSelector\`
              export const useAppDispatch = () => useDispatch<AppDispatch>()
              
              export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
            `}
          />
          <Typography paragraph>
            We will then create a store to hold our reducers:
          </Typography>
          <Highlighter
            codeString={`
              // store.ts

              import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
              
              export function makeStore() {
                return configureStore({
                  reducer: {},
                })
              }
              
              const store = makeStore()
              
              export type AppState = ReturnType<typeof store.getState>
              
              export type AppDispatch = typeof store.dispatch
              
              export type AppThunk<ReturnType = void> = ThunkAction<
                ReturnType,
                AppState,
                unknown,
                Action<string>
              >
              
              export default store
            `}
          />
          <Typography paragraph>
            We will now create our Language slice which will hold our language
            property, slice name, initial value of language, and reducer
            functions. These reducer functions will update the property value
            based on the action that is provided to it. In this case, we will be
            replacing the language value when the setLanguage action is called:
          </Typography>
          <Highlighter
            codeString={`
              // languageSlice.ts

              import { createSlice } from '@reduxjs/toolkit'
              import { AppState } from '../app/store'
              
              // language will default to 'English'
              const initialState = 'English'
              
              export const languageSlice = createSlice({
                // slice name
                name: 'language',
                // set initial value to 'English'
                initialState,
                reducers: {
                  // when setLanguage is called, we will replace the language value with the given argument
                  setLanguage: (state, action) => {
                    // Since we are replacing the state value entirely, we can just return the action payload
                    return action.payload
                  },
                },
              })
              
              // Export the action so we can call it from within other components
              export const { setLanguage } = languageSlice.actions
              
              // Export the language property so we can reference it from within other components
              export const language = (state: AppState) => state.language
              
              // Export the reducer itself so that we can add it to the store
              export default languageSlice.reducer
            `}
          />
          <Typography paragraph>
            After building the reducer, we will add it to the store
          </Typography>
          <Highlighter
            codeString={`
              // store.ts

              import languageReducer from '../features/languageSlice'

              export function makeStore() {
                return configureStore({
                  reducer: { language: LanguageReducer },
                })
              }
            `}
          />
          <Typography paragraph>
            We can now use this store value from within our other components:
          </Typography>
          <Highlighter
            codeString={`
              // setup.tsx              

              import { language } from '../../src/features/languageSlice'
              import { useAppSelector } from '../../src/app/hooks'

              export default function AsyncThunkExample() {
                // use AppSelector to fetch the language value from the store
                const selectedLanguage = useAppSelector(language)

                return (
                  <Typography paragraph variant='body2'>
                    {\`The currently selected language is \${selectedLanguage}.\`}
                  </Typography>
                )
              }
            `}
          />
          <Typography paragraph>
            We can also update the language property from our Header component
            by calling the dispatch function with the setLanguage action as the
            argument:
          </Typography>
          <Highlighter
            codeString={`
              // header.tsx

              import { useAppDispatch, useAppSelector } from '../../app/hooks'
              import { language, setLanguage } from '../../features/languageSlice'

              export default function Header({ handleDrawerToggle }: Props) {
                const classes = useStyles()
                const dispatch = useAppDispatch()
                
                const handleLanguageSelect = (language: string) => {
                  dispatch(setLanguage(language))
                }
              }
            `}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

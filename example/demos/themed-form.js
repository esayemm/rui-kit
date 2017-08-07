import styles      from './themed-form.scss'
import CSSModules  from 'react-css-modules'
import {
  ThemedForm,
  FormState,
  ThemedFormField,
  ThemedFormSubmit,
  Alert,
}                  from '../../src'
import variables   from 'esayemm-styles/variables'

function timeoutPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

@CSSModules(styles)
class FormExample extends React.Component {
  state = {
    formState: null,
    formError: null,
    showAlert: false,
  }

  componentWillMount() {
    const formState = new FormState({
      validators: {
        email: (value = '') => {
          if (value.length <= 0) {
            throw new Error('Cannot be empty')
          }
          return true
        },
        password: () => {
          return true
        },
        confirmPassword: (value, allValues) => {
          if (value !== allValues.password) {
            throw new Error('Must be the same as password')
          }
          return true
        },
        bio: () => {
          return true
        },
      },
    })
    this.setState({ formState })
  }

  closeAlert = () => {
    this.setState({ showAlert: false })
  }

  handleSubmit = async (evt) => {
    const {
      formState,
    } = this.state

    this.setState({ formError: null, showAlert: false })

    try {
      await timeoutPromise()
      throw new Error('hi')
    } catch (err) {
      this.setState({ formError: err, showAlert: true })
    }
  }

  render() {
    const {
      formState,
      formError,
      showAlert,
    } = this.state

    return <ThemedForm
      formState={formState}
    >
      <Alert show={showAlert} close={this.closeAlert}>{formError && formError.message}</Alert>
      <ThemedFormField
        className={styles['themed-form__field']}
        label={'email'}
        style={{display: 'block'}}
        formState={formState}
        formFieldKey={'email'}
        formFieldAttr={{
          placeholder: 'email',
        }}
      />
      <ThemedFormField
        className={styles['themed-form__field']}
        label={'Password'}
        style={{display: 'block'}}
        formState={formState}
        formFieldKey={'password'}
        formFieldAttr={{
          placeholder: 'Password',
          type       : 'password',
        }}
      />
      <ThemedFormField
        className={styles['themed-form__field']}
        label={'Confirm Password'}
        style={{display: 'block'}}
        formState={formState}
        formFieldKey={'confirmPassword'}
        formFieldAttr={{
          placeholder: 'Confirm Password',
          type       : 'password',
        }}
      />
      <ThemedFormField
        className={styles['themed-form__field']}
        label={'Bio'}
        style={{display: 'block'}}
        formState={formState}
        formFieldKey={'bio'}
        formFieldAttr={{
          placeholder: 'Bio',
          formType   : 'textarea',
          style      : {
            resize: 'none',
            height: '100px',
          },
        }}
      />

      <ThemedFormSubmit
        formState={formState}
        type='outline'
        style={{ width: '100%', marginTop: '1rem' }}
        color={variables.green3}
        onClick={this.handleSubmit}
      >
      Submit
      </ThemedFormSubmit>
    </ThemedForm>
  }
}

export default {
  display          : 'ThemedForm',
  to               : '/themed-form',
  demoComponentAttr: {
    header     : `<ThemedForm />`,
    description: 'A form with validation.',
    demos      : [
      <FormExample />,
    ],
    codeSnippetType: 'jsx',
    codeSnippet    : `
function timeoutPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

@CSSModules(styles)
class FormExample extends React.Component {
  state = {
    formState: null,
    formError: null,
  }

  componentWillMount() {
    const formState = new FormState({
      validators: {
        email: (value = '') => {
          if (value.length <= 0) {
            throw new Error('Cannot be empty')
          }
          return true
        },
        password: () => {
          return true
        },
        confirmPassword: (value, allValues) => {
          if (value !== allValues.password) {
            throw new Error('Must be the same as password')
          }
          return true
        },
      },
    })
    this.setState({ formState })
  }

  handleSubmit = async (evt) => {
    const {
      formState,
    } = this.state

    this.setState({ formError: null })

    try {
      await timeoutPromise()
      throw new Error('hi')
    } catch (err) {
      this.setState({ formError: err })
    }
  }

  render() {
    const {
      formState,
      formError,
    } = this.state

    return <ThemedForm
      formState={formState}
    >
      <Alert show={Boolean(formError)}>{formError && formError.message}</Alert>
      <ThemedFormField
        className={styles['themed-form__field']}
        label={'email'}
        style={{display: 'block'}}
        formState={formState}
        formFieldKey={'email'}
        formFieldAttr={{
          placeholder: 'email',
        }}
      />
      <ThemedFormField
        className={styles['themed-form__field']}
        label={'Password'}
        style={{display: 'block'}}
        formState={formState}
        formFieldKey={'password'}
        formFieldAttr={{
          placeholder: 'Password',
          type       : 'password',
        }}
      />
      <ThemedFormField
        className={styles['themed-form__field']}
        label={'Confirm Password'}
        style={{display: 'block'}}
        formState={formState}
        formFieldKey={'confirmPassword'}
        formFieldAttr={{
          placeholder: 'Confirm Password',
          type       : 'password',
        }}
      />

      <ThemedFormSubmit
        formState={formState}
        style={{ width: '100%', borderRadius: '0', marginTop: '1rem' }}
        color={variables.green3}
        onClick={this.handleSubmit}
      >
      Submit
      </ThemedFormSubmit>
    </ThemedForm>
  }
}
    `,
  },
}

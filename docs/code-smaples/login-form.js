export const loginForm = `const generateForm = (id, formData) =>
    form(
        { id, class: 'form' },
        div(
            { class: 'min-width' },
            formData.map((field) =>
                label(null, [field.label ?? field.placeholder, input(field)])
            )
        )
    )

const serialize = (formElement) =>
    Object.fromEntries(
        Array.from(
            formElement.querySelectorAll('input'),
            (input) => input.name && [input.name, input.value]
        ).filter(Boolean)
    )

const loginForm = generateForm('loginForm', [
    {
        type: 'input',
        name: 'login',
        label: 'Login',
        placeholder: 'user@domain.tld',
    },
    { type: 'password', name: 'password', placeholder: 'Password' },
    {
        type: 'number',
        name: 'secure',
        label: 'Security Code',
        placeholder: '0000',
        min: 1000,
        max: 9999,
        step: 1,
    },
    {
        type: 'button',
        value: 'Submit',
        style: 'margin-top: 1em',
        click: () => console.log(serialize(loginForm)),
    },
])

const styles = css({
    '.form': {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        height: '50vh',
        justifyContent: 'center',
    },
    label: { marginTop: '0.5em' },
    '.min-width': { width: 'min-content' },
    'input[type=number]': { width: '100%' },
    'label:has(input[type=button])': {
        textAlign: 'right',
        width: '100%',
    },
})

fragment(styles, loginForm)`

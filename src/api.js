const API_HOST = 'http://papi.mindsales-crm.com'

function checkResponse(response) {
    if (response.status !== 200) throw Error(response.message)
    return response
}

function fetchContacts({ customerID, token }) {
    if (!token) throw Error('Invalid session')
    return fetch(`${API_HOST}/customers/${customerID}/contacts?token=${token}`)
        .then(response => response.json())
        .then(checkResponse)
        .then(({ contacts }) => contacts)
}

function removeContact({ contactID, token }) {
    return fetch(`${API_HOST}/contacts/${contactID}/contacts?token=${token}`, {
        method: 'delete', headers: { 'Content-type': 'application/json' }
    })
        .then(response => response.json())
        .then(checkResponse)
        .then(({ status }) => status)
}

function callbackToContact({ contactID, token }) {
    return fetch(`${API_HOST}/contacts/${contactID}/callback?token=${token}`)
        .then(response => response.json())
        .then(checkResponse)
        .then(({ callback }) => callback)
}

export { fetchContacts, removeContact, callbackToContact }
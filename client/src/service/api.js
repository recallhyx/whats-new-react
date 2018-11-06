const { assign } = Object

let base = { url: '', opts: { credentials: 'same-origin' } }
export function setBase (_base) {
  base = _base
}

function fetchApi (endpoint, opts = {}) {
  opts = assign({
    headers: {
      'Content-Type': 'application/json'
    }
  }, base.opts, opts)
  return fetch(`${base.url}/api/${endpoint}`, opts)
    .then(response => {
      if (response.status !== 200) { throw response }
      switch (response.headers.get('Content-Type')) {
        case 'application/json': return response.json()
        default: return response.text()
      }
    })
}

export function signOut () {
  return fetchApi('sign_out', {
    method: 'DELETE'
  })
}

export function signIn ({ email, password, repos }) {
  return fetchApi('sign_in', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      repos
    })
  })
}

export const increment = (state) => {
    state.count++
    state.lastMutation = 'increment'
}

export const incrementBy = (state, valor) => {
    state.count += valor
    state.lastMutation = `incrementBy ${valor}`
    state.lastRandomInt = valor
}

export const setLoading = (state, status) => {
    state.isLoading = status
    state.lastMutation = `setLoading ${status}`
}

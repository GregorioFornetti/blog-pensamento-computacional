
document.addEventListener('DOMContentLoaded', () => {
    const afterAnswer = document.getElementsByClassName('after-answer')

    Array.from(document.getElementsByClassName('radio-input')).forEach((radioInput) => {
        radioInput.addEventListener('click', () => {
            document.getElementById('btn-submit').disabled = false
        })
    })

    document.getElementById('questions').addEventListener('submit', (event) => {
        event.preventDefault()

        Array.from(afterAnswer).forEach((element) => {
            element.style.display = 'block'
        })

        if (event.target['questions'].value === 'correct') {
            alert('Resposta correta !')
        } else {
            alert('Resposta incorreta !')
        }

        document.getElementById('btn-submit').style.display = 'none'
    })
})
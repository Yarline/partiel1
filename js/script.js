
window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector('body').addEventListener('click', event => {
        document.querySelector('.popUp').style.display= 'flex'
        document.querySelector('.banner').style.opacity= '0.5'
        document.querySelector('.calendar').style.opacity= '0.5'
    })
    
    document.querySelector('.close').addEventListener('click', event => {
        document.querySelector('.popUp').style.display= 'none'
        document.querySelector('.banner').style.opacity= '1'
    document.querySelector('.calendar').style.opacity= '1'
    })
    

  });
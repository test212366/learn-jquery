$(document).ready(() => {
    console.log(123)
})
$(async () => {
    console.log(123)
    // const text = $('.title').text()
    // text.hide()
    const text =  await $('.title').hide(2000)
    await text.show(2000)
    text.hide(2000).show(2000)
    console.log(text)
})
//одинаковый функционал т.е при загрузке страницы они начнут действовать
function imc()
{
    const massa = document.form.massa.value
    const altura = document.form.altura.value
    const resul = massa / (altura * altura)
    document.form.resul.value = eval(resul)
}

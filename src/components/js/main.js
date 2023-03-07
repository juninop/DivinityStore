$(document).ready(function(){$('[data-toggle="tooltip"]').tooltip()
$('.faq-pergunta').click(function(){var status=$(this).attr('data-status');if(status=='fechado'){$(this).attr('data-status','aberto');$(this).addClass('faq-pergunta-aberto');$(this).removeClass('faq-pergunta-fechado');$(this).find('.faq-resposta').toggle();$(this).find('.icon-toggle-plus').toggle();$(this).find('.icon-toggle-minus').toggle();}else if(status=='aberto'){$(this).attr('data-status','fechado');$(this).addClass('faq-pergunta-fechado');$(this).removeClass('faq-pergunta-aberto');$(this).find('.faq-resposta').toggle();$(this).find('.icon-toggle-plus').toggle();$(this).find('.icon-toggle-minus').toggle();}});});$('.btn-g').on('click',function(e){let gateway=$(this).attr('id');var btng=$('.btn-g');btng.removeClass('btn-success');btng.addClass('btn-light');$(this).removeClass('btn-light');$(this).addClass('btn-success');$('[name=gateway]').attr('value',gateway);});

this.addEventListener("DOMContentLoaded", () =>{
    const questions = document.querySelectorAll(".question")
    questions.forEach((question) => question.addEventListener("click", () =>{
  
        if(question.parentNode.classList.contains("active")){
            question.parentNode.classList.toggle("active")
        }
    else{
    questions.forEach(question => question.parentNode.classList.remove("active"))
    question.parentNode.classList.add("active")
        }

    }))
}) 
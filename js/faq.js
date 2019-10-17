
let search_key
let filter = ''
let to_show = topics
let filtered_topics = topics
let selected_section = 'main'
let first_order
let arr_to_map = []
$(document).ready(async () => {
    $('.faq__main__container').load('../pages/faq-parts/faq-main.html', () => {
        loadMainPage()
    });
    $('.faq__input').on('focus', showSuggestionOnFocus)
    $('.faq__input').on('input', filterInsideMainPage);
    $('body').click(function(){
       if(event.target.classList.value !== 'faq__input'){
           $('.faq__suggestions__box').removeClass('faq__suggestions__box__active')
       }
    })

});


function showSuggestionOnFocus(){
  if(arr_to_map.length > 0 &&  $('.faq__input').val().length > 0  ){
    $('.faq__suggestions__box').addClass('faq__suggestions__box__active')
  }
}


function filterInsideMainPage(e) {
    let key = e.target.value
    arr_to_map = []
    let arr = []
    arr = topics.map(val => {
        return {
            arr: val.arr.map(m => m.question)
        }
    })
    arr.forEach(element => {
        element.arr.map(val => {
            arr_to_map = [...arr_to_map, val]
        })
    })
    arr_to_map = arr_to_map.filter(m => m.indexOf(key) >= 0)

    if (arr_to_map.length > 0 && key) {
        $('.faq__suggestions__box').html('')
        $('.faq__suggestions__box').addClass('faq__suggestions__box__active')
        arr_to_map.map((topic, index) => {
          
            let li = `<li class='faq__suggestion' title ='${topic}'>${topic}</li>`
            
            $('.faq__suggestions__box').append(li)
            $('.faq__suggestion').on('click', filterInsideTopics)
        })
    } else {
        $('.faq__suggestions__box').removeClass('faq__suggestions__box__active')
        return $('.faq__suggestions__box').html('')
    }

}


async function filterInsideTopics() {
    $('.faq__suggestions__box').removeClass('faq__suggestions__box__active')
    let search_elem = this.getAttribute('title')
  
    changeFaqPage()
    $('.faq__input').val(search_elem)
  
    let filter_arr = topics

    let filtered_topics = filter_arr

    let filtered_new = topics.map(val => {
        return {
            ...val,
            have: val.arr.filter(m => m.question === search_elem).length > 0,
        }

    }).filter(m => m.have === true)[0]


    first_order = topics.map(val => {
        return {
            check_arr: val.arr.map(elem => {
                if (elem.question === search_elem) {
                    return elem.question
                }
            }).filter(m => m)
        }
    }).filter(m => m.check_arr.length > 0)[0].check_arr

    setFilterName(filtered_new.name)
    mapTopicTitles(filtered_topics)
}


function loadMainPage() {
    topics.map((topic, index) => {
        $('.faq__main__topics ul').append(`<li class='faq__topic'>${topic.name}</li>`)
    })
    $('.faq__topic').click(function (e) {
        setFilterName(this.innerHTML)
        changeFaqPage()
    })
}
function setFilterName(value) {
    filter = value
    to_show = filtered_topics.filter(m => m.name === value)
    mapTopicQuestions()
}





function changeFaqPage() {
    $('.faq__main__container').load('../pages/faq-parts/faq-inner.html', () => {
        mapTopicTitles(filtered_topics)
        $('.faq__inner__titles__list li').click(function () {
            $('.faq__inner__titles__list li').removeClass('selected__topic')
            this.classList.add('selected__topic')
            setFilterName(this.innerHTML)
        })
        mapTopicQuestions()
        selected_section = 'inner'
    });
}





function mapTopicTitles(arr) {
    $('.faq__inner__titles__list').html('')
    arr.map((topic, index) => {
        $('.faq__inner__titles__list').append(`<li class ='${!search_key && filter === topic.name ? 'selected__topic' :
            ''}'>${topic.name}</li>`)
    })
}
function mapTopicQuestions() {
    $('.faq__inner__questions').html('')
    return to_show.map((topic, index) => {
        topic.arr.map((m, i) => {
            let content = `<li
            class='${first_order && first_order.length > 0 && first_order.includes(m.question) ?
                    'first__order' : ''}'
            >
            <div 
            class='topic__question'><h3>Q</h3><h4>${m.question}</h4></div>
            <div class='topic__answer'><h3>A</h3><h4>${m.answer}</h4></div>
            </li>`
            $('.faq__inner__questions').append(content)
        })

    })
}
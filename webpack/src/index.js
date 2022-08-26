import $ from 'jquery'
import './css/index.css'
import './css/index.less'

$(function () {
    $('li:odd').css('backgroundColor', 'cyan')
    $('li:even').css('backgroundColor','brown')
})

class Person {
    static info = 'person : info'
}

console.log(Person.info)
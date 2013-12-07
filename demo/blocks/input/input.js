(function () {

    xtag.register('nb-input', {
        extends: '',
        lifecycle: {
            created: function () {
            },
            inserted: function () {
            },
            removed: function () {
            },
            attributeChanged: function () {
            }
        },
        events: {

        },
        accessors: {

        },
        methods: {

        }
    });

})();

//    xtag.register('nb-input', {
//        extends: 'input',
//        lifecycle: {
//            created: function () {
//                var tmpl = document.querySelector('template#input');
//                var placeholder = this.getAttribute('placeholder');
//                var content = this.textContent;
//                this.innerHTML = tmpl.innerHTML.replace('{{content}}', content).replace('{{placeholder}}', placeholder);
//            }
//        },
//        events: {
//            'click:delegate(.field-reset)': function () {
//                this.parentNode.parentNode.reset();
//            }
//        },
//        accessors: {
//            placeholder: {
//                attribute: {
//                    selector: 'input[type=text]'
//                }
//            },
//            disabled: {
//                   attribute: {
//                       selector: 'input[type=text]',
//                       boolean: true
//                   }
//
//            },
//            value: {
//                set: function (value) {
//                    this.querySelector('input[type=text]').value = value;
//                },
//                get: function () {
//                    return this.querySelector('input[type=text]').value;
//                }
//            }
//        },
//        methods: {
//            reset: function () {
//                this.value = '';
//                xtag.fireEvent(this, 'nb-input_reseted');
//            }
//        }
//    });
//

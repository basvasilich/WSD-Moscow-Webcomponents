(function () {

    xtag.register('nb-button', {
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

//    xtag.register('nb-button', {
//        extends: 'button',
//        lifecycle: {
//            created: function () {
//                var tmpl = document.querySelector('template#button');
//                var content = this.textContent;
//                this.innerHTML = tmpl.innerHTML.replace('{{content}}', content);
//            }
//        },
//        events: {
//            'click': function () {
//                xtag.fireEvent(this, 'nb-button_clicked');
//            }
//        },
//        accessors: {
//            content: {
//                set: function (content) {
//                    this.querySelector('.button-content').innerHTML = content;
//                },
//                get: function () {
//                    return this.querySelector('.button-content').innerHTML;
//                }
//
//            },
//            disabled: {
//                attribute: {
//                    boolean: true
//                }
//            }
//        }
//    });
//
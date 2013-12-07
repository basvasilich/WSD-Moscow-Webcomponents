(function () {

    xtag.register('nb-input-group', {
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

//    xtag.register('nb-input-group', {
//        extends: 'input',
//        lifecycle: {
//            created: function () {
//                this.button = this.querySelector('[is=nb-button]');
//                this.input = this.querySelector('[is=nb-input]');
//            }
//        },
//        events: {
//            'nb-button_clicked': function () {
//                this.send();
//            }
//        },
//        accessors: {
//            placeholder: {
//                set: function (value) {
//                    this.input.placeholder = value;
//                }
//            },
//            disabled: {
//                set: function (value) {
//                    if (value) {
//                        this.classList.add('is-disabled');
//                        this.button.disabled = true;
//                        this.input.disabled = true;
//                    } else {
//                        this.classList.remove('is-disabled');
//                        this.button.disabled = false;
//                        this.input.disabled = false;
//                    }
//                },
//                get: function () {
//                    return !!this.querySelector('input[type=text][disabled]');
//                }
//            },
//            value: {
//                set: function (value) {
//                    this.input.value = value;
//                },
//                get: function () {
//                    return this.input.value;
//                }
//            }
//        },
//        methods: {
//            send: function () {
//                console.log('Input-group result ', this.value);
//            }
//        }
//    });